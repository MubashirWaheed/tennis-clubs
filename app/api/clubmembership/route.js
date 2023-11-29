import prisma from "@/lib/prismadb";

import { getCurrentUser } from "@/lib/services/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { id } = await getCurrentUser();

  const data = await prisma.clubmembership.findMany({
    where: {
      userId: id,
    },
    include: {
      club: true,
    },
  });

  return NextResponse.json(data);
}
