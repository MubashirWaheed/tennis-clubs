"use client";
import Image from "next/image";

const LocationField = ({ id, value, onChange, label }) => {

    return (
      <div className={styles.LocationField}>
        <div className="flex-1 flex flex-col items-start gap-1">
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
          <input
            className={styles.input}
            value={value}
            onChange={onChange}
            id={id}
            type="text"
          />
        </div>

        <Image
          width={20}
          height={20}
          src="/locationIcon.svg"
          alt="Location Icon"
          className="w-[20px] h-[20px]"
        />
      </div>
    );
};

const styles = {
    LocationField:
        "w-full rounded-[10px] border-2 border-[#F6F6F6] bg-[#FAFBFF] px-[24px] py-[8px] flex items-center gap-2",
    label: "w-full f12 fw700 lh20 text-[#828282]",
    input: "outline-none bg-transparent border-none w-full f14 fw400 lh22",
};

export default LocationField;
