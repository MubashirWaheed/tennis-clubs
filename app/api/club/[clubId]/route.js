import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(request, { params }) {
  console.log("params: ", params);

  const { clubId } = params;
  console.log("cludId: ", clubId);

  // include the events so that I can display them as well
  const data = await prisma.club.findUnique({
    where: {
      id: clubId,
    },
    include: {
      events: true,
    },
  });
  console.log("DATA: ", data);
  return NextResponse.json(data);
}
