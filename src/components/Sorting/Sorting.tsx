import React from "react";
import SortButton from "../SortButton/SortButton";
import styles from './Sorting.module.scss'


const Sorting = () => {
    const sortByTimeValues = ['Day', 'Week', 'Month', 'Year']
    const sortByAlphaBet = ['A-Z', 'Z-A']
    return (
        <div className={styles.container}>
            {sortByTimeValues.map((el) => <SortButton timeValue={el} />)}
        </div>
    )
}


export default Sorting