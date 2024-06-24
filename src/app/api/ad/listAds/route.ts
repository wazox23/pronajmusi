import prisma from "../../prisma/db";
import { NextResponse } from "next/server";

(BigInt as any).prototype.toJSON = function() {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

const MAX_PER_PAGE = 20;

export async function POST(req: Request) {
  const params = await req.json();
  const adData = params.params;
  const page = parseInt(params.page || 1) || 1;

  if (adData && (adData.ORFilter.length !== 0 || adData.ANDFilter.length !== 0)) {
    let whereParams: any = {};
    if (adData.ORFilter.length) {
      whereParams["OR"] = adData.ORFilter;
    }
    if (adData.ANDFilter.length) {
      whereParams["AND"] = adData.ANDFilter;
    }
    const [ads, count] = await prisma.$transaction([
      prisma.ads.findMany({ where: whereParams, take: MAX_PER_PAGE, skip: MAX_PER_PAGE * (page - 1) }),
      prisma.ads.count({ where: whereParams })
    ])

    let response = {
      status: "success",
      data: {
        ads,
        count
      },
    };

    return new NextResponse(JSON.stringify(response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    const [ads, count] = await prisma.$transaction([
      prisma.ads.findMany({ take: MAX_PER_PAGE, skip: MAX_PER_PAGE * (page - 1) }),
      prisma.ads.count()
    ])

    let response = {
      status: "success",
      data: {
        ads,
        count
      },
    };

    return new NextResponse(JSON.stringify(response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }
}
