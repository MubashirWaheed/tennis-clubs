const TextArea = ({ id, value, onChange, label }) => {

    return (
        <div className={styles.textField}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <textarea
                className={styles.textArea}
                id={id}
                onChange={onChange}
                maxLength={500}
                value={value}
                rows="8"
                type="text"
            />
        </div>
    );
};

const styles = {
    textField: "w-full rounded-[10px] border-2 border-[#F6F6F6] bg-[#FAFBFF] px-[24px] py-[8px] flex flex-col items-start gap-1",
    label: "w-full f12 fw700 lh20 text-[#828282]",
    textArea: "outline-none bg-transparent border-none w-full f14 fw400 lh22",
};

export default TextArea;
