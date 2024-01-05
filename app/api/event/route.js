import prisma from "@/lib/prismadb";
import { getCurrentUser } from "@/lib/services/getCurrentUser";
import { NextResponse } from "next/server";

// GET the event data
export async function GET(request) {
  return NextResponse.json("data form get handler");
}

// POST
// How do I figure out how many divisions the admin created on the frontend
export async function POST(request) {
  const { data, clubId } = await request.json();

  const {
    divisions,
    // maxPlayers,
    eventName,
    eventLocation,
    email,
    eventDescription,
    registrationStartDate,
    registrationBeginTime,
    registrationEndDate,
    registrationEndTime,
    eventStartDate,
    eventBeginTime,
    eventEndDate,
    eventEndTime,
    // coaching,
    // officals,
    publishedDate,
    publishedTime,
  } = data;

  const result = await prisma.$transaction([
    prisma.event.create({
      data: {
        clubId: clubId,
        eventName,
        eventLocation,
        email,
        eventDescription,
        registrationStartDate,
        registrationBeginTime,
        registrationEndDate,
        registrationEndTime,
        eventStartDate,
        eventBeginTime,
        eventEndDate,
        eventEndTime,
        // coaching,
        // officals,
        // maxPlayers,
        publishedDate,
        publishedTime,
      },
    }),
    ...divisions.map((division) =>
      prisma.division.create({
        data: {
          divisionName: division.divisionName,
          entryFee: division.entryFee,
          gender: division.gender,
          format: division.format,
          formatType: division.formatType,
          coaching: division.coaching,
          maxPlayers: division.maxPlayers,
          officals: division.officals,
        },
      })
    ),
  ]);

  const event = result[0];
  const createdDivision = result.slice(1);

  // Link the division to the event
  await prisma.event.update({
    where: { id: event.id },
    data: {
      divisions: {
        connect: createdDivision.map((division) => ({ id: division.id })),
      },
    },
  });

  console.log("DATA IN THE BACKEND:", data);

  return NextResponse.json({ ...event, division: createdDivision });
}
