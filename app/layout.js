// "use client";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "@/app/globals.css";
import HomeHeader from "./components/header/homeHeader";
import { AuthProvider } from "../context/AuthProvider";
import { getCurrentUser } from "@/lib/services/getCurrentUser";
import ProfileRoute from "./components/Routes/ProfileRoute";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }) {
  const user = await getCurrentUser();
  // console.log("USER: ", user);

  return (
    <html lang="en" className="overflow-x-hidden">
      <body>
        <AuthProvider>
          {user ? <Header /> : <HomeHeader />}
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
