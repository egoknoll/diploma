import React, { useEffect, useState } from "react";
import { BurgerIsClosed, BurgerIsOpen, UserUnknown } from "../../images/icons/icons";
import { useAppSelector } from "../../redux/hook";
import styles from './Burger.module.scss'
import { IForm } from "../../pages/SignupPage/SignupPage";
import { useNavigate } from "react-router-dom";



const Burger = () => {
    const [open, setOpen] = useState(false)
    const [userInfo, setUserInfo] = useState<IForm | undefined>(undefined)
    
    const theme = useAppSelector((store) => store.theme.value)
    const authState = useAppSelector((store) => store.auth.value)
    const user = localStorage.getItem('user')
    const navigate = useNavigate()

    useEffect(() => {
        setUserInfo(user ? JSON.parse(user) : undefined)
    },[user, authState])

    const handleSignoutButtonClick = () => {
        localStorage.clear()
        setOpen(!open)
    }
    const handleSigninButtonClick = () => {
        setOpen(!open)
        navigate('/signin')
    }

    return (
        <>
            <div className={styles.icon} onClick={() => setOpen(!open)}>
                {!open ? <BurgerIsClosed stroke={theme ? "#313037" : 'white'} /> : <BurgerIsOpen fill={theme ? "#313037" : 'white'} />}
            </div>
            {open 
                ?
                    <div className={styles.authContainer}>
                        {userInfo 
                            ?
                                <div className={theme ? styles.userInfo : styles.userInfoDark}>                  
                                    <div>{`${userInfo.firstName[0]}${userInfo.lastName[0]}`}</div>
                                    <div>{`${userInfo.firstName} ${userInfo.lastName}`}</div>
                                    <div onClick={handleSignoutButtonClick}>Sign Out</div>
                                </div>
                            :
                                <div className={theme ? styles.signinButton : styles.signinButtonDark} onClick={handleSigninButtonClick}>
                                    Sign In
                                </div>
                        }
                    </div>
                : null
            }
        </>
    )
}


export default Burger