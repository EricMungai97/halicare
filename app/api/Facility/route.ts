export const dynamic = 'force-dynamic'
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import getCurrentFacilityUser from "@/app/actions/getCurrentFacilityUser";

export async function POST(
    request: Request,
) {
    const body = await request.json();
    const currentUser = await getCurrentFacilityUser();
    console.log(currentUser);

    if (!currentUser) {
        return NextResponse.error();
      }

    const {
        name,
        location,
        overview
    } = body;

    const facility = await prisma.healthcareFacility.create({
        data: {
            name,
            location,
            overview,
            userId: currentUser.id,
        },
    });

    return NextResponse.json(facility);
}