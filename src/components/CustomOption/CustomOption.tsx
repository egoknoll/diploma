import React from 'react'
import styles from './CustomOption.module.scss'
import { useAppSelector } from '../../redux/hook'

interface ICustomOption {
    optionsState: boolean
    sortByValue : string
    sortByDateValue: string
    sortByAlphaValue: string
    changeSortByAlphaValue: (arg: string) => void
    changeSortByDateValue: (arg: string) => void
    sortBy: string
}


const CustomOption = ({ optionsState, sortByValue, changeSortByAlphaValue, sortBy, changeSortByDateValue, sortByDateValue }: ICustomOption) => {
    const theme = useAppSelector((store) => store.theme.value)
    const handleButtonClick = () => {
        if(sortBy === 'Title') {
        changeSortByAlphaValue(sortByValue)
        } else if (sortBy === 'Date') {
            changeSortByDateValue(sortByValue)
        }
    }
    return (
        <>
            {optionsState
            ?
                <div className={theme ? styles.option : styles.optionDark} onClick={handleButtonClick}>
                    <span>{sortBy}{sortBy === 'Title' ? `(${sortByValue})` : `(${sortByDateValue})`}</span>
                </div>
            : null
            }
        </>
    )
}

export default CustomOption