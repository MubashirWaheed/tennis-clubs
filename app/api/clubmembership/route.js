import prisma from "@/lib/prismadb";

import { getCurrentUser } from "@/lib/services/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET(request) {
  const currentUser = await getCurrentUser();
  if (!currentUser || !currentUser.id) {
    return NextResponse.json("user not found");
    // return NextResponse.error("User ID not found", { status: 400 });
  }
  const { id } = currentUser;

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
