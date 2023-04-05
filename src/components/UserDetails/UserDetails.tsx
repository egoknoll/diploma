import React from "react";
import styles from './UserDetails.module.scss'
import LogOut from "../LogOut/LogOut";

interface IUserDetails {
    openModal: boolean
    changeModalState: (arg: boolean) => void
}

const UserDetails = ({ openModal, changeModalState }: IUserDetails) => {
    const handleSignoutButtonClick = () => {
        localStorage.clear()
        changeModalState(!openModal)
    }
    return (
        <>
            {openModal 
                ?
                    <div className={styles.logout} onClick={handleSignoutButtonClick}>
                        <LogOut />
                    </div> 
                : null
            }
        </>
    )
}

export default UserDetails