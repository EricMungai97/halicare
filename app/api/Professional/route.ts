// pages/api/getHealthcareProfessional.ts

// import type { NextApiRequest, NextApiResponse } from 'next'
// import prisma from '@/app/libs/prismadb'; // Adjust the import to your prisma client location
// import { NextResponse } from 'next/server';

// interface Iparams {
//     id: string;
// }

// export default async function GET(
//     req: Request,
//     { params }: { params: Iparams }) {
//   if (req.method !== 'GET') {
//     return NextResponse.error();
//   }
  
//   const { id } = params;// Assume you pass userId as a query parameter
  
//   try {
//     const healthcareProfessional = await prisma.healthcareProfessional.findFirst({
//       where: { userId: id }
//     });
    
//     if (!healthcareProfessional) {
//       return NextResponse.error();
//     }
    
//     return NextResponse.json(healthcareProfessional);
//   } catch (error) {
//     console.error('Error in getHealthcareProfessional:', error);
//     return NextResponse.error();
//   }
// }

// pages/api/checkHealthcareProfessional.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/app/libs/prismadb'; // Adjust the import to your prisma client location
import { NextResponse } from 'next/server';



export async function POST(
  req: Request,
   res: NextApiResponse) {
  if (req.method !== 'POST') {
    return 
  }

  const body = await req.json();
  console.log(body);
  const { id } = body;// Assume you pass userId as a query parameter

  
  const healthcareProfessional = await prisma.healthcareProfessional.findFirst({
      where: { userId: id }
    });

    return NextResponse.json(healthcareProfessional);
}
