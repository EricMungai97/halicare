export const dynamic = 'force-dynamic'
import prisma from "@/app/libs/prismadb";
import exp from "constants";
import twilio from "twilio";
import { NextResponse } from "next/server";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);


export async function POST(request: Request, res: Response) {
    const body = await request.json();
    console.log(body);
    const facilityId = body.id;

    const facility = await prisma.healthcareFacility.findFirst({
        where: {
            userId: facilityId,
        },
    });

    if (!facility) {
        return NextResponse.error();
    }
    console.log(facility);
   const professionals = await prisma.healthcareProfessional.findMany({
    select: {
        phone: true,
    },
    });
    
    const phoneNumbers = professionals.map((professional) => {
        return professional.phone;
    })
    console.log(phoneNumbers);

    for (const phoneNumber of phoneNumbers) {
        await client.messages.create({
            body: `A new  has been created at ${facility.name}. Apply at https://halicare.vercel.app/login/availableShifts `,
            from: "+18662641397",
            to: phoneNumber,
        });
        
    }
    return NextResponse.json(phoneNumbers);
}
    
