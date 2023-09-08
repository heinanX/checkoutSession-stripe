import { useSocket } from "../../context/userContext"
import LoginForm from "../Forms/LoginForm/LoginForm"
import SignUpForm from "../Forms/SignUpForm/SignUpForm"
import './PopUp.css'

const PopUp = () => {

  const { loginVisibility, signUpVisibility } = useSocket()

  return (
    <div className='popup'>
        {loginVisibility ? <LoginForm /> : <></>}
        {signUpVisibility ? <SignUpForm /> : <></>}
    </div>
  )
}

export default PopUp