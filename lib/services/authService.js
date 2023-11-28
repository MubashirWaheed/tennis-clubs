import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

// REGISTER USER WITH CREDENTIALS
export async function registerUser(email, hashedPassword, onboarded) {
  if (!email || !hashedPassword) {
    return NextResponse.json({
      error: "Both email and password required",
      status: 400,
    });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        onboarded,
        // clubMembership: "",
      },
    });
    console.log("USER IN THE AUTH SERVICE", user);

    return user;
  } catch (error) {
    console.log("ERROR ", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
