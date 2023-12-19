"use client";
import { useCallback, useEffect, useState } from "react";
import Modal from "@/components/ui/Modal/Modal";
import profileJson from "./profile.json";
import ProfileForm from "../components/ProfileForm";

const ProfileInfo = () => {
  const [modal, setModal] = useState(false);
  // const { data, error, isLoading } = useSWR("/api/user", fetcher);

  return (
    <section className="p-[10px] md:p-[20px] lg:p-[38px] bg-white rounded-[10px] z-20">
      <h3 className="h3 text-[#13013C]">Personal information.</h3>
      <ProfileForm />

      <div className={` ${modal ? "block " : "hidden"} `}>
        <Modal
          className=""
          heading="For parents signing up for a child"
          closeModal={() => setModal(!modal)}
        >
          <ul className="text-grey f14 list-disc ">
            <li className="mt-[25px]">{profileJson[0].point1}</li>
            <li className="mt-[25px]">{profileJson[0].point2}</li>
            <li className="mt-[25px]">
              {profileJson[0].point3}{" "}
              <span className="text-purple fw500 cursor-pointer">
                Support Team.
              </span>
            </li>
          </ul>
        </Modal>
      </div>
    </section>
  );
};

export default ProfileInfo;
