import React from 'react'
import styles from './CustomOption.module.scss'
import { useAppSelector } from '../../redux/hook'

interface ICustomOption {
    optionsState: boolean
    sortByValue : string
    changeSortValue?: (arg: string) => void
    sortBy: string
}


const CustomOption = ({ optionsState, sortByValue, sortBy, changeSortValue }: ICustomOption) => {
    const theme = useAppSelector((store) => store.theme.value)
    const handleButtonClick = () => {
        if(changeSortValue)
        changeSortValue(sortByValue)
    }
    return (
        <>
            {optionsState
            ?
                <div className={theme ? styles.option : styles.optionDark} onClick={handleButtonClick}>
                    <span>{sortBy} {`(${sortByValue})`}</span>
                </div>
            : null
            }
        </>
    )
}

export default CustomOption