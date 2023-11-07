import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/services/getCurrentUser";

export async function POST(request) {
  const dataSent = await request.json();
  console.log("DATA SENT", dataSent);
  const currentUser = await getCurrentUser();

  const year = parseInt(dataSent.data.Year);
  const month = new Date(
    Date.parse(dataSent.data.Month + " 1, 2000")
  ).getMonth();
  const day = parseInt(dataSent.data.Day);
  const birthdate = new Date(year, month, day);
  console.log("BIRthDATE: ", birthdate);

  const { firstname, lastname, profileURL, Gender, phoneNumber, location } =
    dataSent.data;
  console.log("FIRST NAME:", firstname);
  const result = await prisma.profile.create({
    data: {
      firstName: firstname,
      lastName: lastname,
      birthdate: birthdate,
      phone: phoneNumber,
      location: location,
      gender: Gender,
      userId: currentUser.id,
      profileURL,
    },
  });
  return NextResponse.json({ test: "done" });
}
