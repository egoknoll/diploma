import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserUnknown } from "../../images/icons/icons";
import { IForm } from "../../pages/SignupPage/SignupPage";
import { useAppSelector } from "../../redux/hook";
import LogOut from "../LogOut/LogOut";
import styles from './UserInfo.module.scss'
import UserDetails from "../UserDetails/UserDetails";




const UserInfo = () => {
    const [openModal, setOpenModal] = useState(false)
    const [userInfo, setUserInfo] = useState<IForm | undefined>(undefined)
    const authState = useAppSelector((store) => store.auth.value)
    const navigate = useNavigate()
    const user = localStorage.getItem('user')
    
    useEffect(() => {
        setUserInfo(user ? JSON.parse(user) : undefined)
    },[user, authState])

    return (
        <>
            {userInfo
                ?
                    <>
                        <div className={styles.signinButton} onClick={() => setOpenModal(!openModal)}>
                            <div>{`${userInfo.firstName[0]}${userInfo.lastName[0]}`}</div>
                            <div>{`${userInfo.firstName} ${userInfo.lastName}`}</div>
                        </div>
                        <UserDetails openModal={openModal} changeModalState={setOpenModal} />
                    </>
                :
                    <div className={styles.signinButton} onClick={() => navigate('/signin')}>
                        <div>
                            <UserUnknown />
                        </div>
                        <div>Sign In</div>
                    </div>
            }
        </>
    )
}


export default UserInfo