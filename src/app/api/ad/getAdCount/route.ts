import prisma from "../../prisma/db";
import { NextResponse } from "next/server";

(BigInt as any).prototype.toJSON = function() {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

export async function POST(req: Request) {
  const adData = await req.json();

  if (adData && (adData.ORFilter.length !== 0 || adData.ANDFilter.length !== 0)) {
    let whereParams: any = {};
    if (adData.ORFilter.length) {
      whereParams["OR"] = adData.ORFilter;
    }
    if (adData.ANDFilter.length) {
      whereParams["AND"] = adData.ANDFilter;
    }
    const count = await prisma.ads.count(
      {
        where: whereParams,
      }
    );

    let response = {
      status: "success",
      data: {
        count
      },
    };

    return new NextResponse(JSON.stringify(response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    const count = await prisma.ads.count();

    let response = {
      status: "success",
      data: {
        count
      },
    };

    return new NextResponse(JSON.stringify(response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }
}
