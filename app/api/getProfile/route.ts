import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function GET(request: Request) {
    const currentUser = await getCurrentUser();
    console.log(currentUser);
    if (!currentUser) { return NextResponse.error(); }
    if (request.method !== "GET") return NextResponse.error();  
    const profile = await prisma.healthcareProfessional.findFirst({
            where: {
                userId: currentUser.id
            }
        });
    console.log(profile);
    return NextResponse.json(profile);
    }
