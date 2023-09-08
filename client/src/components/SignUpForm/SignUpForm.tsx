import { useSocket } from "../../context/userContext"
import BtnClose from "../BtnClose/BtnClose"
import './SignUpForm.css'

const SignUpForm = () => {

  const { setLoginVisibility, setSignUpVisibility } = useSocket()

  const switchForm = () => {
    setLoginVisibility(true)
    setSignUpVisibility(false)
  }

  return (
    <div className="SignUpForm">
      <span>
        <h3>New here?</h3>
        <h1>Create an account</h1>
      </span>

      <BtnClose />
      
        <input type="text" placeholder="Enter Name" name="uname" required />

        <input type="mail" placeholder="Enter Mail" name="mail" required />

        <input type="password" placeholder="Enter Password" name="psw" required />
        

        <p>Already a customer? <a onClick={switchForm}>Login here</a></p>

        <button className='signUp--btn' >create</button>
    </div>
  )
}

export default SignUpForm