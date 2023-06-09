import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import styles from './SignupPage.module.scss'


export interface IForm {
    email: string
    password: string
    firstName: string
    lastName: string
}

const SignupPage = () => {
    const [form, setForm] = useState<IForm>(
        {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    )
    const [responeData, setResponseData] = useState<IForm>()
    const theme = useAppSelector((store) => store.theme.value)
    const navigate = useNavigate()


    const handleSubmitForm = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://641ae8df1f5d999a44560c77.mockapi.io/users/users', form)
            setResponseData(response.data)
            setForm({
                email: '',
                password: '',
                firstName: '',
                lastName: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={theme ? styles.container : styles.containerDark}>
            <div className={styles.homeBtn} onClick={() => navigate('/news')}>Back to home</div>
            <h1>Sign Up</h1>
            <form className={theme ? styles.formContainer : styles.formContainerDark} onSubmit={(e) => handleSubmitForm(e)}>
                <div className={styles.inputContainer}>
                    <div>Email</div>
                    <input type="email" placeholder="Your email" value={form.email} required minLength={5} onChange={(e) => setForm({...form, email: e.target.value})} />
                </div>
                <div className={styles.inputContainer}>
                    <div>Password</div>
                    <input type="password" placeholder="Your password" value={form.password} required minLength={4} onChange={(e) => setForm({...form, password: e.target.value})} />
                </div>
                <div className={styles.inputContainer}>
                    <div>First Name</div>
                    <input type="text" placeholder="Your name" value={form.firstName} required minLength={2} onChange={(e) => setForm({...form, firstName: e.target.value})}/>
                </div>
                <div className={styles.inputContainer}>
                    <div>Last Name</div>
                    <input type="text" placeholder="Your last name" value={form.lastName} required minLength={2} onChange={(e) => setForm({...form, lastName: e.target.value})} />
                </div>
                {responeData ? <div>You have signed up!</div> : null}
                <button type='submit'>Sign Up</button>
                <div className={styles.formFooter}>
                    <div>Already have an account?</div>
                    <div onClick={() => navigate('/signin')}>Sign In</div>
                </div>
            </form>
        </div>
    )
}


export default SignupPage