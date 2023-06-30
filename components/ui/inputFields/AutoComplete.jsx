"use client";
import React from 'react';

const AutoComplete = ({ id, value, setValue, label }) => {
    
    const [filteredData, setFilteredData] = 
    React.useState([])
    const [] = React.useState();

    const filterData = () => {

    }

    return(
        <div className='w-full relative'>
            <div className={styles.passwordField}>
                <div className="flex-1 flex flex-col items-start gap-1">
                    <label className={styles.label} htmlFor={id}>{label}</label>
                    <input
                        className={styles.input}
                        value={value}
                        type="text"
                        onChange={filterData}
                        id={id}
                    />
                </div>
            </div>
            <div className='absolute inset-x-0 w-full mt-2 shadow-lg'></div>
        </div>
    )
}

const styles = {
    autoCompleteField: "w-full rounded-[10px] border-2 border-[#F6F6F6] bg-[#FAFBFF] h-[67px] px-[24px] py-[13px] flex",
    label: "w-full f12 fw700 lh20 text-[#828282]",
    input: "outline-none border-none w-full f14 fw400 lh22",
};

export default AutoComplete;