import { useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
// export const useUserClubStore = create();
// simple hook which will get the user and I will display it in the sidebar pannel
async function useUserClubs(userId) {
  const [clubs, , setClubs] = useState([]);

  const userClubs = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      clubs: {
        include: {
          admins: true,
          members: true,
        },
      },
    },
  });
}

export default useUserClubs;
