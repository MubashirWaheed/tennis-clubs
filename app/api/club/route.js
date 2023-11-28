// import prisma from "@/lib/prismadb";
import prisma from "@/lib/prismadb";
import { getCurrentUser } from "@/lib/services/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET(request) {
  const loggedUser = await getCurrentUser();
  return NextResponse.json("response");
}

export async function POST(request) {
  const loggedUser = await getCurrentUser();

  const body = await request.json();
  const { clubName, phoneNumber, clubLocation, about, email, clubWebsite } =
    await body.data;

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

  const clubMembership = await prisma.clubmembership.create({
    data: {
      userId: loggedUser.id,
      clubId: result.id,
      isAdmin: true,
    },
  });

  return NextResponse.json("done");
}

// get list of clubs that user is part of

// export async function GET(request) {
//   const loggedUser = await getCurrentUser();
//   console.log("loggedUser: ", loggedUser);

//   // return logged user list of clubs

//   const userClubs = await prisma.club.findMany({
//     where: {
//       OR: [
//         {
//           clubMembership: {
//             some: {
//               userId: loggedUser.id,
//               isAdmin: true,
//             },
//           },
//         },
//         {
//           clubMembership: {
//             some: {
//               userId: loggedUser.id,
//             },
//           },
//         },
//       ],
//     },
//   });

//   return NextResponse.json(userClubs);
// }
