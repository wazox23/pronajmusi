import prisma from "../../prisma/db";
import { NextResponse } from "next/server";

(BigInt as any).prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

export async function POST(req: Request){
    const adData = await req.json();

    const relatedAds = await prisma.ads.findMany(
        {
            where: {
                OR: [
                    {category: adData.category},
                    {location: adData.location},
                    { title: { contains: adData.title } }
                ],
                AND: [
                    {type: adData.type},
                ]
            },
            take: 10
        }
    );

    let response = {
        status: "success",
        data: {
            relatedAds,
        },
    };

    return new NextResponse(JSON.stringify(response), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}