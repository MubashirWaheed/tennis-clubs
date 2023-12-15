import prisma from "@/lib/prismadb";
export async function isEmailRegistered(email) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return !!existingUser;
}
