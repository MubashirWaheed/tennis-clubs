"use client";
import Image from "next/image";
import Editor from "./components/editor";
import axios from "axios";
import { useEffect } from "react";

const createNewClubEditor = () => {
  //  fetching the club
  const getClubData = async () => {
    const result = await axios.get("/api/club");
    console.log("RESULT:", result);
  };
  // getClubData();

  useEffect(() => {
    getClubData().then((data) => {
      console.log("LIST ", data);
    });
  }, []);
  return (
    <main>
      <section className="py-14 w-full flex flex-col gap-[20px] items-center">
        <h2 className="h2 text-[#13013c]">Create New Club</h2>
        <Image
          width={120}
          height={20}
          src="/greenHeaderLine.svg"
          alt="Header"
          className="w-[120px]  h-[20px] mt-2"
        />
      </section>
      <Editor />
    </main>
  );
};

export default createNewClubEditor;
