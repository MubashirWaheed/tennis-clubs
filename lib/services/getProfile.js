import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prismadb";

export async function getProfile(id) {
  console.log("id: ", id);
  try {
    const profile = await prisma.profile.findUnique({
      where: {
        userId: id,
      },
    });
    if (!profile) return null;

    return profile;
  } catch (error) {
    return null;
  }
}
