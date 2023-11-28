import prisma from "@/lib/prismadb";

import { getCurrentUser } from "@/lib/services/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET(request) {
  const loggedUser = await getCurrentUser();
  console.log("loggedUser.id: ", loggedUser.id);
  const data = await prisma.clubmembership.findMany({
    where: {
      userId: loggedUser.id,
    },
    include: {
      club: true,
    },
  });
  console.log("data from the club membership route: ", data);
  return NextResponse.json(data);
}
