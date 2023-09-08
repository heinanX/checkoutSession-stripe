import { useState } from 'react';
import { useSocket } from '../../../context/userContext'
import BtnClose from '../../_shared_components/BtnClose/BtnClose';
import './LoginForm.css'
import EmailInput from '../../_shared_components/Form_inputs/EmailInput';
import PasswordInput from '../../_shared_components/Form_inputs/PasswordInput';

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
        
        
    }

    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <span>
                <h1>Hi there,</h1>
                <h2>Great to see you!</h2>
            </span>

            <BtnClose />
            <EmailInput setEmail={setEmail} />

            <PasswordInput setPass={setPass} />

            <p>Need to <a onClick={switchForm}>sign up</a>?</p>

            <button className='login--btn' type="submit">Login</button>
        </form>
    )
}

export default LoginForm;
