import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

// GET DRAWS FOR EVENT
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const eventId = searchParams.get("eventId");

  const data = await prisma.draw.findMany({
    where: {
      eventId: eventId,
    },
  });
  return NextResponse.json(data);
}

// CREATE DRAW
export async function POST(request) {
  const { formData, eventId } = await request.json();

  const result = await prisma.draw.create({
    data: {
      ...formData,
      eventId,
    },
  });
  console.log("RESULT: ", result);

  return NextResponse.json("RESULT AFTER DRAW  CREATION", result);
}
