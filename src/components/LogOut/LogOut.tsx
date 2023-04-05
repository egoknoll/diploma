import React from "react";
import { useAppSelector } from "../../redux/hook";
import styles from './LogOut.module.scss'

const LogOut = () => {
    const theme = useAppSelector((store) => store.theme.value)
    return (
        <div className={theme ? styles.container : styles.containerDark}>
            Log Out
        </div>
    )
}


export default LogOut