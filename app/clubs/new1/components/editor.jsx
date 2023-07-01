import EmailField from "@/components/ui/inputFields/EmailField";
import MobileField from "@/components/ui/inputFields/MobileField";
import OTPField from "@/components/ui/inputFields/OTPField";
import TextArea from "@/components/ui/inputFields/TextArea";
import TextField from "@/components/ui/inputFields/TextField";
import CreateButton from "@/components/ui/buttons/PrimaryButton"
const Editor = () => {
    return(
        <section>
            <form
                className="w-[70%] mx-auto flex flex-col gap-[25px]"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col w-full gap-[20px]">
                    <TextField
                    id="clubName"
                    label="Club Name"
                    value={formData.clubName}
                    onChange={handleChange}
                    />

                    <TextField
                    id="clubLocation"
                    label="Club Location"
                    value={formData.clubLocation}
                    onChange={handleChange}
                    />

                    <div className="flex flex-row gap-[20px]">
                        <MobileField
                            id="phoneNumber"
                            label="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        <OTPField
                            id="otp"
                            label="OTP"
                            value={formData.otp}
                            onChange={handleChange}
                        />
                    </div>

                    <EmailField
                    id="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    />

                    <TextArea
                    id="about"
                    label="About"
                    value={formData.about}
                    onChange={handleChange}
                    />

                    <TextField
                    id="clubWebsite"
                    label="Club Website"
                    value={formData.clubWebsite}
                    onChange={handleChange}
                    />

                    {/* Button */}
                    <div className="flex flex-row justify-end w-full py-20">
                        <CreateButton type="submit">Create Club</CreateButton>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Editor;