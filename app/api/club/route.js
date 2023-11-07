import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request) {
  const body = await request.json();
  const { clubName, phoneNumber, clubLocation, about, email, clubWebsite } =
    await body.data;
  console.log("clubName: ", clubName);

  const result = await prisma.club.create({
    data: {
      clubName,
      phoneNumber,
      clubLocation,
      about,
      email,
      clubWebsite,
    },
  });
  // const result = await prisma.club.create({
  //   clubId: uuidv4(),
  //   clubName: clubName,
  //   phoneNumber,
  //   clubLocation,
  //   about,
  //   clubWebsite,
  //   email,
  // });

  // store the club data in the database
  return NextResponse.json("done");
}
