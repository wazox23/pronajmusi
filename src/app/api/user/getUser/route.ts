import prisma from "../../prisma/db";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    const userData = await req.json();
    
    const user = await prisma.user.findUnique({
        where: {
            id: userData.id
        }
    })

    let response = {
        status: "success",
        data: {
            user,
        },
    };

    return new NextResponse(JSON.stringify(response), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}