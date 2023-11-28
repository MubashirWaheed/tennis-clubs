import prisma from "@/lib/prismadb";
import { getCurrentUser } from "@/lib/services/getCurrentUser";
import { NextResponse } from "next/server";

// GET
export async function GET(request) {
  return NextResponse.json("data form get handler");
}

// POST
export async function POST(request) {
  const { data, clubId } = await request.json();
  console.log("data: ", data);

  const currentUser = await getCurrentUser();

  const {
    divisionName,
    entryFee,
    gender,
    maxPlayers,
    format,
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
    coaching,
    officals,
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
        coaching,
        officals,
        maxPlayers,
        publishedDate,
        publishedTime,
      },
    }),
    prisma.division.create({
      data: {
        divisionName,
        entryFee: entryFee,
        gender: gender,
        format: format,
      },
    }),
  ]);

  const event = result[0];
  const division = result[1];

  // Link the division to the event
  await prisma.event.update({
    where: { id: event.id },
    data: {
      divisions: {
        connect: {
          id: division.id,
        },
      },
    },
  });

  return NextResponse.json({ ...event, ...division });
}
