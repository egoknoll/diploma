import React from "react";
import { useAppSelector } from "../../redux/hook";
import styles from './SortButton.module.scss'

interface ISortButton {
    timeValue: string
}

const SortButton = ( { timeValue }: ISortButton ) => {
    const theme = useAppSelector((store) => store.theme.value)
    return(
        <button className={theme ? styles.container : styles.containerDark} >
            <span>{timeValue}</span>
        </button>
    )
}

export default SortButton