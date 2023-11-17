export const dynamic = "force-dynamic";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const body = await request.json();

  const shiftId = body; // Assume you pass userId as a query parameter

  const shift = await prisma.shift.findUnique({
    where: {
      id: shiftId,
    },
  });

  if (shift?.confirmed === true) {
    return NextResponse.json({ error: "Shift is already confirmed" }, { status: 400 });
  }

  const deletedShift = await prisma.shift.delete({
    where: {
      id: shiftId,
    },
  });

  if (deletedShift.confirmed === true) {
    console.log(deletedShift);
    return NextResponse.json(deletedShift);
  }
}
