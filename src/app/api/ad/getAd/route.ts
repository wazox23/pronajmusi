import prisma from "../../prisma/db";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    const adData = await req.json();
    
    const ad = await prisma.ads.findUnique({
        where: {
            id: adData.id
        }
    })

    let response = {
        status: "success",
        data: {
            ad,
        },
    };

    return new NextResponse(JSON.stringify(response), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}