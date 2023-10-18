export const dynamic = 'force-dynamic'
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    request: Request,
) {
    const body = await request.json();
    const currentUser = await getCurrentUser();
    console.log(currentUser);

    if (!currentUser) {
        return NextResponse.error();
      }

    const {
        firstName,
        lastName,
        title,
        phone,
        address,
        dateOfBirth,
        language,
        emergencyContactName,
        emergencyContactPhone,
    } = body;

    const healthCareProfessional = await prisma.healthcareProfessional.create({
        data: {
            firstName,
            lastName,
            title,
            phone,
            address,
            dateOfBirth,
            language,
            emergencyContactName,
            emergencyContactPhone,
            userId: currentUser.id,
        },
    });

    return NextResponse.json(healthCareProfessional);
}