import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/services/getCurrentUser";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  console.log("userId: ", userId);

  const data = await prisma.profile.findUnique({
    where: {
      userId: userId,
    },
  });
  // console.log("data from the profile GET API : ", data);

  return NextResponse.json(data);
}

export async function POST(request) {
  const { data } = await request.json();
  console.log("request made to get profile fo logged user");
  const currentUser = await getCurrentUser();

  const year = parseInt(data.year);
  // Subtract 1 from month because it's zero-based in JavaScript
  const month = parseInt(data.month) - 1;
  const day = parseInt(data.day);
  const birthdate = new Date(year, month, day);
  console.log("DATA BEFORE", data);
  console.log("birthdate after formatting: ", birthdate);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const {
    firstname,
    lastname,
    profileURL,
    gender,
    phoneNumber,
    location,
    // month,
    // year,
    // day,
  } = data;

  const result = await prisma.profile.create({
    data: {
      firstName: firstname,
      lastName: lastname,
      birthdate: new Date(),
      phone: phoneNumber,
      location: location,
      gender: gender,
      userId: currentUser.id,
      profileURL,
    },
  });

  // birthdate,
  return NextResponse.json(result);
}
