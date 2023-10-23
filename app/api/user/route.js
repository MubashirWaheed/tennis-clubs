import prisma from "@/lib/prismadb";
import { getCurrentUser } from "@/lib/services/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET() {
  // get the current user
  const user = await getCurrentUser();
  return NextResponse.json(user);
}
