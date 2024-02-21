export const dynamic = "force-dynamic";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentFacilityUser";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

async function getFacilityByFacilityUser(userId: string) {
  return await prisma.healthcareFacility.findFirst({
    where: {
      userId: userId,
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const currentUser = await getCurrentUser();
  console.log(currentUser);

  if (!currentUser) {
    return NextResponse.error();
  }

  const currentFacility = await getFacilityByFacilityUser(currentUser.id);
  if (!currentFacility) {
    return NextResponse.error();
  }

  const { startTime, endTime, profession, date } = body;

  const facility = await prisma.shift.create({
    data: {
      startTime,
      endTime,
      profession,
      date,
      userId: currentUser.id,
      facilityId: currentFacility.id,
    },
  });

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const users = await prisma.user.findMany({
    select: {
      email: true,
    },
  });
  console.log(users);

  for (const user of users) {
    if (user.email) {
      const mailOptions: Mail.Options = {
        from: process.env.NEXT_PUBLIC_EMAIL_USER,
        to: user.email,
        subject: `New Shifts Available`,
        text: `
                    New shifts are available for ${profession} on ${date} at ${currentFacility.name}.
                    `,
      };

      const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
          transport.sendMail(mailOptions, function (err) {
            if (!err) {
              resolve("Email sent");
            } else {
              reject(err.message);
            }
          });
        });
      try {
        await sendMailPromise();
      } catch (err) {
        console.log(err);
      }
    }
  }
  return NextResponse.json(facility);
}
