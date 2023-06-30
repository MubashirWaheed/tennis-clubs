const EmailField = ({ value, onChange, label }) => {
    return (
        <div className={styles.emailField}>
            <label className={styles.label} htmlFor={"email"}>{label}</label>
            <input
                className={styles.input}
                value={value}
                onChange={onChange}
                id={"email"}
                type="email"
            />
        </div>
    );
};

const styles = {
    emailField: "w-full rounded-[10px] border-2 border-[#F6F6F6] bg-[#FAFBFF] px-[24px] py-[8px] flex flex-col items-start gap-1",
    label: "w-full f12 fw700 lh20 text-[#828282]",
    input: "outline-none border-none bg-transparent w-full f14 fw400 lh22",
};

export default EmailField;
