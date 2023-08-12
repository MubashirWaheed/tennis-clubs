"use client";
import Image from "next/image";
import AdminForm from "./components/adminform";
import AddAdmin from "@/components/ui/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AddScorer from "./components/AddScorer";

const Admin = () => {
  const router = useRouter();
  const [showAddScorer, setShowAddScorer] = useState(false);
  const handleModal = () => {
    setShowAddScorer(!showAddScorer);
  };

  return (
    <>
      <section className="relative -top-[30px] w-full max-w-[1170px] mx-auto bg-[#fff] rounded-[10px] shadow-md">
        <div className="px-[52px] py-[48px]">
          <h2 className="h2 text-[#13013c] mb-[19px]">Add Admin To Club</h2>
          <p className="f16 fw400 lh24 text-[#828282] ">
            Admin can edit profile settings, create events and draw. and post
            scores. adding an admin to your club will automatically add to
            current and features events.
          </p>
          <AdminForm />
          <h3 className="f16 fw700 lh24 mt-[20px] text-[#13013C] ">Scorer</h3>
          <div className="flex gap-[10px] items-center w-full bg-white mt-[18px] h-[83px] shadow-sm rounded-[10px]">
            <div className={styles.iconWrapper}>
              <Image
                src="/user-icon.svg"
                alt="User Icon"
                width={40}
                height={40}
                className={styles.icon}
              />
            </div>
            <div>
              <h2 className="text-[#13013C] fw700 f16 lh24">
                Richard K. McClain
              </h2>
              <p className="lh24 f14 fw400 text-[#828282]">
                DoraWMarshall@teleworm.us | +1 56565 56552
              </p>
            </div>
          </div>

          {/* ADD score */}
          <div
            onClick={() => setShowAddScorer(!showAddScorer)}
            className="flex items-center my-[20px] gap-2 "
          >
            <button className="rounded-lg p-[8px] border-solid border-2 border-[#027333]">
              <Image
                src="/add-icon-green.svg"
                alt="add scorer"
                width={20}
                height={20}
              />
            </button>
            <p className="cursor-pointer text-[#13013C] fw700 f16 lh24">
              Add scorer
            </p>
          </div>
          <AddScorer showAddScorer={showAddScorer} handleModal={handleModal} />

          <AddAdmin
            size="small"
            onClick={() => {
              router.push("admin/add");
            }}
          >
            Add Admin
          </AddAdmin>
        </div>
      </section>
    </>
  );
};

export default Admin;

const styles = {
  iconWrapper:
    "w-auto px-[8px] py-[5px] sm:w-[100px] sm:h-[37px] md:w-[50px] md:h-[50px] ml-[20px] flex items-center justify-center rounded-full bg-[#027333] cursor-pointer",
  icon: "w-[30px] h-[30px]",
};
