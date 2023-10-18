export const dynamic = 'force-dynamic'
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
    if (request.method !== "POST") return NextResponse.error();

    const currentUser = await getCurrentUser();

    if (!currentUser) { return NextResponse.error(); }

    const body = await request.json();

    const shiftId  = body; 

    console.log("shift",shiftId);
    
    const healthcareProfessional = await prisma.healthcareProfessional.findFirst({
            where: {
                userId: currentUser.id
            }
        });
    
    if (!healthcareProfessional) {
        return NextResponse.error();
    }

    const shift = await prisma.shift.findFirst({
        where: {
            userId: currentUser.id
        }
    });

    if (!shift) {
        return NextResponse.error();
    }

    const updateShift = await prisma.shift.update({
        where: {
            id: shiftId,
        },
        data: {
            userId: null,
        },
    });
    return NextResponse.json(updateShift);
}