import React, { useEffect } from "react";
import { useAppSelector } from "../../redux/hook";
import styles from './SortButton.module.scss'

interface ISortButton {
    timeValue: string
    changeSortByDateValue: (arg: string) => void
    sortByDateValue: string
}

const SortButton = ( { timeValue, changeSortByDateValue, sortByDateValue }: ISortButton ) => {
    const theme = useAppSelector((store) => store.theme.value)
    const handleButtonClick = () => {
        if(sortByDateValue !== timeValue) {
            changeSortByDateValue(timeValue)
        } else changeSortByDateValue('')
    }
    return(
        <button 
            className={`
                ${theme ? styles.container : styles.containerDark} 
                ${timeValue === sortByDateValue ? styles.containerActive : ''}
            `}
            onClick={handleButtonClick}
        >
            <span>{timeValue}</span>
        </button>
    )
}

export default SortButton