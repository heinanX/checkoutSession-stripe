import { useSocket } from '../../context/userContext'
import BtnClose from '../BtnClose/BtnClose';
import './LoginForm.css'

const LoginForm = () => {

    const { setLoginVisibility, setSignUpVisibility } = useSocket()
    const switchForm = () => {
        setLoginVisibility(false)
        setSignUpVisibility(true)
    }

    const handleLogIn = async () => {

        const response = await fetch(
          "http://localhost:3000/"
        );
        const data = await response.json();
       console.log(data);
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

            <button className='login--btn' type="submit" onClick={handleLogIn}>Login</button>
        </div>
    )
}

export default LoginForm;
