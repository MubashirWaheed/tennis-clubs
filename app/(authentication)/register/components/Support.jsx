"use client";
import React, { useState } from "react";
import Modal from "@/components/ui/Modal/Modal";
import profileJson from "../profile/profile.json";

const Support = () => {
  const [modal, setModal] = useState(false);

  return (
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
  );
};

export default Support;
