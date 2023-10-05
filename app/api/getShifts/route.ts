import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  if (request.method !== "GET") return NextResponse.error();
  try {
    const shifts = await prisma.shift.findMany({
      include: {
        healthcareFacility: true,
      },
    });
    console.log(shifts);
    return NextResponse.json(shifts);
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
