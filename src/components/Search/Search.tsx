import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { changeSearchState } from "../../redux/slices/searchSlice"
import styles from './Search.module.scss'




const Search = () => {
    const theme = useAppSelector((store) => store.theme.value)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [searchState, setSearchState] = useState(false)
    const handleSubmitForm = (e: any) => {
        e.preventDefault()
        navigate('/search')
    }
    if (searchState) {
        return (
            <form className={theme ? styles.searchContainer : styles.searchContainerDark} onSubmit={handleSubmitForm}>
                <input type="text" placeholder="Search..." onChange={(e) => dispatch(changeSearchState(e.target.value))} />
                <div className={styles.imageCross} onClick={() => setSearchState(!searchState)}></div>
            </form>
        )
    } else return (
        <div className={styles.container}>
            <div className={styles.separator}></div>
            <div className={theme ? styles.image : styles.imageDark} onClick={() => setSearchState(!searchState)}></div>
        </div>
    )
}

export default Search