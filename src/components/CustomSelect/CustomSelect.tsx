import React, { useState } from "react";
import { Chevron, ChevronDark } from "../../images/icons/icons";
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
    }
    return(
        <div className={styles.container}>
            <button className={theme ? styles.select : styles.selectDark} onClick={handleButtonClick}>
                <div><span>Sort:</span>{sortBy} {sortValues.length > 3 ? sortByDateValue : sortByAlphaValue}</div>
                {theme ? <Chevron /> : <ChevronDark />}
            </button>
            <div className={styles.options}>
                {sortValues.map((el) => <CustomOption
                    changeSortValue={changeSortValue}
                    sortBy={sortBy} 
                    optionsState={optionsState} 
                    sortByValue={el}
                    key={Math.random()} 
                    />)}
                <CustomOption changeSortValue={changeSortValue} sortBy={'Reset'} optionsState={optionsState} sortByValue={''}  />
            </div>
        </div>
    )
}

export default CustomSelect