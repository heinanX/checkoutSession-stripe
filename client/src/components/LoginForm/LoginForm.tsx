import { useState } from 'react';
import { useSocket } from '../../context/userContext'
import BtnClose from '../BtnClose/BtnClose';
import './LoginForm.css'

const LoginForm = () => {

    const { setLoginVisibility, setSignUpVisibility, login } = useSocket()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const switchForm = () => {
        setLoginVisibility(false)
        setSignUpVisibility(true)
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(email, pass);
        
        login(email, pass)
        
   /*      login(event.target.mail.value ,event.target.psw.value) */
        
    }

    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <span>
                <h1>Hi there,</h1>
                <h2>Great to see you!</h2>
            </span>

            <BtnClose />
            <input
            type="text"
            placeholder="Email"
            name="mail"
            onChange={(e) => {setEmail(e.target.value)}}
            required />

            <input
            type="password"
            placeholder="Password"
            name="psw"
            onChange={(e) => {setPass(e.target.value)}}
            required />

            <p>Need to <a onClick={switchForm}>sign up</a>?</p>

            <button className='login--btn' type="submit">Login</button>
        </form>
    )
}

export default LoginForm;
