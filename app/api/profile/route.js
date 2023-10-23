import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/services/getCurrentUser";

export async function POST(request) {
  const dataSent = request.json();
  const currentUser = await getCurrentUser();

  const birthdateString = "12-5-2022";
  const parts = birthdateString.split("-");
  const year = parseInt(parts[2]);
  const month = parseInt(parts[1]) - 1; // Month is zero-based
  const day = parseInt(parts[0]);

  const birthdate = new Date(year, month, day);
  const result = await prisma.profile.create({
    data: {
      firstName: "mubashir",
      listName: "waheed",
      birthdate: birthdate,
      phone: 1234567890,
      location: "lahore",
      gender: "MALE",
      userId: currentUser.id,
    },
  });
  return NextResponse.json({ test: "done" });
}
