import React, { useState } from "react"
import { useAppSelector } from "../../redux/hook"
import styles from './Search.module.scss'




const Search = () => {
    const theme = useAppSelector((store) => store.theme.value)
    const [searchState, setSearchState] = useState(false)
    if (searchState) {
        return (
            <div className={theme ? styles.searchContainer : styles.searchContainerDark}>
                <input type="text" placeholder="Search..." />
                <div className={styles.imageCross} onClick={() => setSearchState(!searchState)}></div>
            </div>
        )
    } else return (
        <div className={styles.container}>
            <div className={styles.separator}></div>
            <div className={theme ? styles.image : styles.imageDark} onClick={() => setSearchState(!searchState)}></div>
        </div>
    )
}

export default Search