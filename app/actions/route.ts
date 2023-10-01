// pages/api/getHealthcareProfessional.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "@/app/libs/prismadb";// Adjust the import to your prisma client location

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const userId = req.query.userId as string; // Assume you pass userId as a query parameter
  
  try {
    const healthcareProfessional = await prisma.healthcareProfessional.findFirst({
      where:  {
        userId: userId as string,
    },
    });
    
    if (!healthcareProfessional) {
      return res.status(404).json({ error: 'Healthcare professional not found' });
    }
    
    return res.status(200).json(healthcareProfessional);
  } catch (error) {
    console.error('Error in getHealthcareProfessional:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
