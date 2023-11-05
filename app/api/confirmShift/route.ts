export const dynamic = 'force-dynamic'
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {

  const body = await request.json();

  const shiftId  = body; // Assume you pass userId as a query parameter
  
  const updatedShift = await prisma.shift.update({
    where: {
      id: shiftId,
    },
    data: {
     confirmed: true,
    },
  });
  console.log(updatedShift);
  return NextResponse.json(updatedShift);
  
}
