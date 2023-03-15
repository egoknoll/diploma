import React from 'react'
import { useAppSelector } from '../../redux/hook'
import PaginationButton from '../PaginationButton/PaginationButton'
import styles from './Pagination.module.scss'


interface IPagination {
    page: number;
    pages: number[];
    changePage: (page: number) => void
}

const Pagination = ({ pages, changePage, page }: IPagination) => {
    const theme = useAppSelector((store) => store.theme.value)
    const handlePrevButtonClick = () => {
        if(page > 1) {
            changePage(page - 1)
        }
    }
    const handleNextButtonClick = () => {
        if (page < pages[pages.length - 1]) {
            changePage(page + 1)
        }
    }
    return (
        <div className={theme ? styles.container : styles.containerDark}>
            <div className={styles.btnContainer} onClick={handlePrevButtonClick} >
                <div className={theme ? styles.btnPrev: styles.btnPrevDark}></div>
                <div>Prev</div>
            </div>
            <div className={styles.paginationButtonContainer}>
                <PaginationButton changePage={changePage} page={pages[0]} propPage={page} />
                {pages.map((el) => {
                    if(el > 1 && el < page + 3) {
                        return <PaginationButton changePage={changePage} page={el} propPage={page} />
                    }
                })}
                <div>...</div>
                <PaginationButton propPage={page} changePage={changePage} page={pages[pages.length - 1]} />
            </div>
            <div className={styles.btnContainer} onClick={handleNextButtonClick}>
                <div>Next</div>
                <div className={theme ? styles.btnNext : styles.btnNextDark}></div>
            </div>
        </div>
    )
}


export default Pagination