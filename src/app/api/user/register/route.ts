import prisma from "../../prisma/db";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    const userData = await req.json();
    
    const savedUser = await prisma.user.create({
        data: userData
    });

    let response = {
        status: "success",
        data: {
            savedUser,
        },
    };

    return new NextResponse(JSON.stringify(response), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}