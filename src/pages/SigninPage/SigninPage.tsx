import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { store } from "../../redux/store";
import styles from '../SignupPage/SignupPage.module.scss'
import { IForm } from "../SignupPage/SignupPage";
import axios from "axios";
import { authApi } from "../../api";
import { changeAuthState } from "../../redux/slices/authSlice";

interface IResponse {
    data: IForm[]
}

interface ISigninForm {
    email: string
    password: string
}



const SigninPage = () => {
    const [users, setUsers] = useState<IForm[]>()
    const [authState, setAuthState] = useState<undefined | boolean>(undefined)
    const [form, setForm] = useState<ISigninForm>(
        {
            email: '',
            password: ''
        }
    )
    const theme = useAppSelector((store) => store.theme.value)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            const response: IResponse = await authApi.get('')
            setUsers(response.data)
        })()
    }, [])

    const handleSubmitForm = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const user = users?.find((el) => el.email === form.email && el.password === form.password )
        if(user) {
            setAuthState(true)
            dispatch(changeAuthState())
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            setAuthState(false)
        }
    }

    return (
        <div className={theme ? styles.container : styles.containerDark}>
            <div className={styles.homeBtn} onClick={() => navigate('/news')}>Back to home</div>
            <h1>Sign In</h1>
            <form className={theme ? styles.formContainer : styles.formContainerDark} onSubmit={(e) => handleSubmitForm(e)}>
                <div className={styles.inputContainer}>
                    <div>Email</div>
                    <input type="email" placeholder="Your email" value={form.email} required minLength={5} onChange={(e) => setForm({...form, email: e.target.value})} />
                </div>
                <div className={styles.inputContainer}>
                    <div>Password</div>
                    <input type="password" placeholder="Your password" value={form.password} required minLength={4} onChange={(e) => setForm({...form, password: e.target.value})} />
                </div>
                {authState === true ? <div>You have successfully signed in!</div> : null}
                {authState === false ? <div style={{color : 'red'}}>Password and(or) email are incorrect</div> : null}
                <button type='submit'>Sign In</button>
                <div className={styles.formFooter}>
                    <div>Don't have an account?</div>
                    <div onClick={() => navigate('/signup')}>Sign Up</div>
                </div>
            </form>
        </div>
    )
}



export default SigninPage