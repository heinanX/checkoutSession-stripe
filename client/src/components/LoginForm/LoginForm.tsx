import { useSocket } from '../../context/userContext'
import BtnClose from '../BtnClose/BtnClose';
import './LoginForm.css'

const LoginForm = () => {

    const { setLoginVisibility, setSignUpVisibility } = useSocket()
    const switchForm = () => {
        setLoginVisibility(false)
        setSignUpVisibility(true)
    }

    return (
        <div className="loginForm">
            <span>
                <h1>Hi there,</h1>
                <h2>Great to see you!</h2>
            </span>

            <BtnClose />
            <input type="text" placeholder="Username" name="uname" required />

            <input type="password" placeholder="Password" name="psw" required />

            <p>Need to <a onClick={switchForm}>sign up</a>?</p>

            <button className='login--btn' type="submit">Login</button>
        </div>
    )
}

export default LoginForm;
