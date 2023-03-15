import React from 'react'
import { useAppSelector } from '../../redux/hook'
import styles from './PaginationButton.module.scss'

interface IPaginationButton {
    page: number
    changePage: (page: number) => void
    propPage: number
}

const PaginationButton = ({ page, changePage, propPage }: IPaginationButton) => {
    const theme = useAppSelector((store) => store.theme.value)
    return (
        <div className={theme ? styles.container : styles.containerDark} onClick={() => changePage(page)}>
            <div className={propPage === page ? styles.btnActive : styles.btn}>{page}</div>
        </div>
    )
}

export default PaginationButton