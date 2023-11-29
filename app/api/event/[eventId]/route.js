import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { eventId } = params;

  const data = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
    include: {
      club: true,
    },
  });

  return NextResponse.json(data);
}
