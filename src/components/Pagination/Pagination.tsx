import React from 'react'
import { useAppSelector } from '../../redux/hook'
import { filterPagesCount } from '../../utils/utils';
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
    const newPages = filterPagesCount(pages, page)
    
    return (
        <div className={theme ? styles.container : styles.containerDark}>
            <button className={styles.btnContainer} onClick={handlePrevButtonClick} >
                <div className={theme ? styles.btnPrev: styles.btnPrevDark}></div>
                <div>Prev</div>
            </button>
            <div className={styles.paginationButtonContainer}>
                <PaginationButton changePage={changePage} page={pages[0]} propPage={page} />
                {newPages.map((el) => 
                    <PaginationButton changePage={changePage} page={el} propPage={page} key={Math.random()} />
                )}
                <div>...</div>
                <PaginationButton propPage={page} changePage={changePage} page={pages[pages.length - 1]} />
            </div>
            <button className={styles.btnContainer} onClick={handleNextButtonClick}>
                <div>Next</div>
                <div className={theme ? styles.btnNext : styles.btnNextDark}></div>
            </button>
        </div>
    )
}


export default Pagination