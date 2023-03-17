import React from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import SortButton from "../SortButton/SortButton";
import styles from './Sorting.module.scss'


interface ISorting {
    changeSortByDateValue: (arg: string) => void
    changeSortByAlphaValue: (arg: string) => void
    sortByDateValue: string
    sortByAlphaValue: string
}

const Sorting = ({ changeSortByDateValue, sortByDateValue, changeSortByAlphaValue, sortByAlphaValue }: ISorting) => {
    const sortByDateValues = ['Day', 'Week', 'Month', 'Year']
    const sortByAlphabetValues = ['A-Z', 'Z-A']
    return (
        <div className={styles.container}>
            <div className={styles.sortingContainer}>
                {sortByDateValues.map((el) => <SortButton 
                    sortByDateValue={sortByDateValue} 
                    changeSortByDateValue={changeSortByDateValue} 
                    timeValue={el} 
                    key={Math.random()} 
                />)}
            </div>
            <CustomSelect
                sortBy={'Date'} 
                sortValues={sortByDateValues}
                sortByAlphaValue={sortByAlphaValue}
                sortByDateValue={sortByAlphaValue}
                changeSortByDateValue={changeSortByAlphaValue}
                changeSortByAlphaValue={changeSortByAlphaValue}  
            />
            <CustomSelect
                sortBy={'Title'} 
                sortValues={sortByAlphabetValues}
                sortByAlphaValue={sortByAlphaValue}
                sortByDateValue={sortByAlphaValue}
                changeSortByDateValue={changeSortByAlphaValue}
                changeSortByAlphaValue={changeSortByAlphaValue}  
            />
        </div>
    )
}


export default Sorting