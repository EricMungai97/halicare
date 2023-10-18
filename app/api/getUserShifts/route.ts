export const dynamic = "force-dynamic";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function GET(request: Request) {
    if (request.method !== "GET") return NextResponse.error();
    const currentUser = await getCurrentUser();
    if (!currentUser) { return NextResponse.error(); }
    const shift = await prisma.shift.findMany({
        where: {
            userId: currentUser.id
        },
        include: {  
            healthcareFacility: true,
        },
    });
    console.log(shift);
    return NextResponse.json(shift);
    }