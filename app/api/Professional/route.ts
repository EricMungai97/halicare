import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/app/libs/prismadb'; // Adjust the import to your prisma client location
import { NextResponse } from 'next/server';

export async function POST(req:Request) {

  const body = await req.json();
  console.log(body);
  const { id } = body; 

  const healthcareProfessional = await prisma.healthcareProfessional.findFirst({
    where: { userId: id }
  });
  console.log(healthcareProfessional);
  
  return NextResponse.json(healthcareProfessional);
}


