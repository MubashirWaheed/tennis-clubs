import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

// for particular event get all the draws
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const eventId = searchParams.get("eventId");

  const data = await prisma.draw.findMany({
    where: {
      eventId: param,
    },
  });
  return NextResponse.json(data);
}

export async function POST(request) {
  // how to destructure the data
  const { formData, eventId } = await request.json();

  const result = await prisma.draw.create({
    data: {
      ...formData,
      eventId,
    },
  });
  console.log("RESULT: ", result);

  return NextResponse.json("data form get handler");
}
