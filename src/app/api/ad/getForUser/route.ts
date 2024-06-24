import prisma from "../../prisma/db";
import { NextResponse } from "next/server";

(BigInt as any).prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

export async function POST(req: Request){
    const adData = await req.json();
    
    const userAds = await prisma.ads.findMany({
        where: {
            userID: adData.userID
        }
    })

    let response = {
        status: "success",
        data: {
            userAds,
        },
    };

    return new NextResponse(JSON.stringify(response), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}