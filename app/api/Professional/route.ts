import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/app/libs/prismadb'; // Adjust the import to your prisma client location
import { NextResponse } from 'next/server';



export async function POST(
  req: Request,
   res: NextApiResponse) {
  if (req.method !== 'POST') {
    return ({ error: 'Method not allowed' });
  }

  const body = await req.json();
  console.log(body);
  const { id } = body;// Assume you pass userId as a query parameter

  
  const healthcareProfessional = await prisma.healthcareProfessional.findFirst({
      where: { userId: id }
    });
  console.log(healthcareProfessional);
    return NextResponse.json(healthcareProfessional);
}
