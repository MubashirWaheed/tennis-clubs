import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { isEmailRegistered } from "@/lib/utils/isEmailRegistered";
import { registerUser } from "@/lib/services/authService";

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;
  const emailAlreadyExists = await isEmailRegistered(email);

  if (emailAlreadyExists) {
    return NextResponse.error();
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const onboarded = false;
  const resposne = await registerUser(email, hashedPassword, onboarded);
  console.log("RESPOSNE IN THE SERVER: ", resposne);

  return NextResponse.json(resposne);
}
