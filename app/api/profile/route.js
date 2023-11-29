import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/services/getCurrentUser";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  const data = await prisma.profile.findUnique({
    where: {
      userId: userId,
    },
  });

  return NextResponse.json(data);
}

export async function POST(request) {
  const { data } = await request.json();
  const currentUser = await getCurrentUser();

  const year = parseInt(data.year);
  const month = new Date(Date.parse(data.month + " 1, 2000")).getMonth();
  const day = parseInt(data.day);
  const birthdate = new Date(year, month, day);

  const { firstname, lastname, profileURL, gender, phoneNumber, location } =
    data;

  const result = await prisma.profile.create({
    data: {
      firstName: firstname,
      lastName: lastname,
      birthdate: birthdate,
      phone: phoneNumber,
      location: location,
      gender: gender,
      userId: currentUser.id,
      profileURL,
    },
  });

  return NextResponse.json(result);
}
