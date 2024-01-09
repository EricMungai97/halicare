export const dynamic = 'force-dynamic'
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const shiftId  = body; // Assume you pass userId as a query parameter

  const healthcareProfessional = await prisma.healthcareProfessional.findFirst({
    where: {
      userId: currentUser.id,
    },
  });

  // Check if the HealthcareProfessional is approved
  if (!healthcareProfessional || !healthcareProfessional.approved) {
    return new Response("Forbidden: User is not approved to apply for shifts", { status: 403 });
  }

  
  const updatedShift = await prisma.shift.update({
    where: {
      id: shiftId,
    },
    data: {
      userId: currentUser.id,
      applied: true,
    },
  });
  console.log(updatedShift);
  return NextResponse.json(updatedShift);
  
};