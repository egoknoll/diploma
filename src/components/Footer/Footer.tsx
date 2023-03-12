import React from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { changeTheme } from "../../redux/slices/themeSlice"
import styles from './Footer.module.scss'

const Footer = () => {
    const theme = useAppSelector((store) => store.theme.value)
    const dispatch = useAppDispatch()
    const handleThemeButtonClick = () => {
        dispatch(changeTheme())
    }
    return (
            <div className={theme ? styles.container : styles.containerDark}>
                <div>©2023 Egoknoll</div>
                <div className={styles.theme}>
                    <div>Dark theme</div>
                    <div 
                    className={theme ? styles.themeImage : styles.themeImageActive} 
                    onClick={handleThemeButtonClick}
                    >
                    </div>
                </div>
            </div>
    )
}

export default Footer