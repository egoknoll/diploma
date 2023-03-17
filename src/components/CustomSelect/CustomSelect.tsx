import React, { useState } from "react";
import { useAppSelector } from "../../redux/hook";
import CustomOption from "../CustomOption/CustomOption";
import styles from './CustomSelect.module.scss'

interface ICustomSelect {
    sortValues: string[]
    sortByAlphaValue: string
    sortByDateValue: string
    changeSortValue: (arg: string) => void
    sortBy: string
}

const CustomSelect = ({ sortValues, sortByAlphaValue, changeSortValue, sortBy, sortByDateValue}: ICustomSelect) => {
    const [optionsState, setOptionsState] = useState(false)
    const theme = useAppSelector((store) => store.theme.value)
    const handleButtonClick = () => {
        setOptionsState(!optionsState)
        if(sortByAlphaValue || sortByDateValue) {
            changeSortValue('')
        }
    }
    return(
        <div className={styles.container}>
            <button className={theme ? styles.select : styles.selectDark} onClick={handleButtonClick}>
                <div><span>Sort:</span>{sortBy} {sortValues.length > 3 ? sortByDateValue : sortByAlphaValue}</div>
                {theme 
                    ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 10L12 14L7 10" stroke="#313037" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 10L12 14L7 10" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                }
            </button>
            <div className={styles.options}>
                {sortValues.map((el) => <CustomOption
                    changeSortValue={changeSortValue}
                    sortBy={sortBy} 
                    optionsState={optionsState} 
                    sortByValue={el}
                    key={Math.random()} 
                    />)}
            </div>
        </div>
    )
}

export default CustomSelect