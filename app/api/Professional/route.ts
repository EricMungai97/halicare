import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/app/libs/prismadb'; // Adjust the import to your prisma client location

export async function POST(req:Request, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = await req.json();
  console.log(body);
  const { id } = body; 

  const healthcareProfessional = await prisma.healthcareProfessional.findFirst({
    where: { userId: id }
  });
  console.log(healthcareProfessional);
  
  res.json(healthcareProfessional);
}


