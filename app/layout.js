// "use client";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "@/app/globals.css";
import HomeHeader from "./components/header/homeHeader";
import { AuthProvider } from "../context/AuthProvider";
import { getCurrentUser } from "@/lib/services/getCurrentUser";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }) {
  let user = "";
  const session = await getServerSession(authOptions);

  if (session || session?.user) {
    user = session.user;
  }

  return (
    <html lang="en" className="overflow-x-hidden">
      <body>
        <AuthProvider session={session}>
          {session?.user ? <Header /> : <HomeHeader />}
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
