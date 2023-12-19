import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(request, { params }) {
  const { clubId } = params;

  // include the events so that I can display them as well
  const data = await prisma.club.findUnique({
    where: {
      id: clubId,
    },
    include: {
      events: true,
    },
  });
  // console.log("DATA FOR TEH CLUB ", data);

  return NextResponse.json(data);
}
