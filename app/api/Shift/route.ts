export const dynamic = 'force-dynamic'
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import getCurrentUser from "@/app/actions/getCurrentFacilityUser";

async function getFacilityByFacilityUser(userId: string) {
    return await prisma.healthcareFacility.findFirst({
        where: {
            userId: userId
        }
    });
}

export async function POST(
    request: Request,
) {
    const body = await request.json();
    const currentUser = await getCurrentUser();
    console.log(currentUser);

    if (!currentUser) {
        return NextResponse.error();
      }

      const currentFacility = await getFacilityByFacilityUser(currentUser.id);
      if (!currentFacility) {
          return NextResponse.error( );
      }

    const {
        startTime,
        endTime,
        profession,
        date,
    } = body;

    const facility = await prisma.shift.create({
        data: {
            startTime,
            endTime,
            profession,
            date,
            userId: currentUser.id,
            facilityId: currentFacility.id,
        },
    });

    return NextResponse.json(facility);
}