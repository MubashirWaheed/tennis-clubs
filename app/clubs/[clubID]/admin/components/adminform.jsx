"use client";
// import clubData from "./../../../";
import TextField from "@/components/ui/inputFields/TextField";
import EmailField from "@/components/ui/inputFields/EmailField";
import MobileField from "@/components/ui/inputFields/MobileField";
import OTPField from "@/components/ui/inputFields/OTPField";
import { useState } from "react";

const AdminForm = () => {
  const [adminDetails, setAdminDetails] = useState({
    name: "",
    email: "",
    phone: "",
    otp: "",
  });
  return (
    <>
      <form className="w-full flex flex-col gap-[20px] mt-4">
        <div className="flex space-x-4">
          <TextField
            id="adminName"
            label="Name"
            value={adminDetails.name}
            onChange={(e) =>
              setAdminDetails({ ...adminDetails, name: e.target.value })
            }
          />
          <EmailField
            id="adminEmail"
            label="Email"
            value={adminDetails.email}
            onChange={(e) =>
              setAdminDetails({ ...adminDetails, email: e.target.value })
            }
          />
        </div>

        <MobileField
          id="adminPhone"
          label="Mobile Number"
          value={adminDetails.phone}
          onChange={(e) =>
            setAdminDetails({ ...adminDetails, phone: e.target.value })
          }
        />
        <OTPField
          id="adminOTP"
          value={adminDetails.otp}
          label="OTP"
          onChange={(e) =>
            setAdminDetails({ ...adminDetails, otp: e.target.value })
          }
        />
      </form>
    </>
  );
};
export default AdminForm;
