"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MoreButton = () => {
  const [isMoreExpanded, seIsMoreExpanded] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => seIsMoreExpanded(!isMoreExpanded)}
        className="px-[20px] py-[13px] rounded-[8px] inline-flex items-center justify-center gap-[20px] bg-[#027333] border-2 border-[#027333] cursor-pointer"
      >
        <Image
          width={24}
          height={24}
          src="/more.svg"
          alt="more"
          className="w-[24px] h-[24px]"
        />
      </button>
      {isMoreExpanded && (
        <div className="top-[60px] absolute p-[20px] -left-[130px] lg:-left-[180px] rounded-[10px] bg-white z-20 shadow-lg">
          <ul className="w-[130px] lg:w-[180px] flex flex-col gap-3">
            <li>
              <Link
                className="f14 fw700 lh32 text-[#828282] hover:text-[#3B2273] cursor-pointer"
                href="/clubs/123/admin"
              >
                Add Admin
              </Link>
            </li>
            <li>
              <Link
                className="f14 fw700 lh32 text-[#828282] hover:text-[#3B2273] cursor-pointer"
                href="/clubs/123/payments"
              >
                Payments Accounts
              </Link>
            </li>
            <li>
              <Link
                className="f14 fw700 lh32 text-[#828282] hover:text-[#3B2273] cursor-pointer"
                href="#"
              >
                Edit Club
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoreButton;
