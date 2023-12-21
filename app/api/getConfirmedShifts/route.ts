export const dynamic = "force-dynamic";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  if (request.method !== "GET") return NextResponse.error();

  const confirmedShifts = await prisma.shift.findMany({
    where: {
      confirmed: true
    },
    include: {
      user: {
        include: {
          healthcareProfessional: true
        }
      },
      healthcareFacility: true
    }
  });
  console.log(confirmedShifts);
  return NextResponse.json(confirmedShifts);
}
