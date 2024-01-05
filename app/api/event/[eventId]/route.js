import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { eventId } = params;
  console.log("eventId ", eventId);

  const data = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
    include: {
      club: true,
      divisions: true,
    },
  });
  console.log("DATA from the event id: ", data);

  return NextResponse.json(data);
}
