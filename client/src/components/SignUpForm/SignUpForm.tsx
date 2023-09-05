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
      {/* <label><b>Username</b></label> */}
      <input type="text" placeholder="Enter Username" name="uname" required />

      {/* <label><b>Password</b></label> */}
      <input type="password" placeholder="Enter Password" name="psw" required />
      
      <input type="mail" placeholder="Enter Mail" name="mail" required />

      <p>Happened here by mistake? <a onClick={switchForm}>Login here</a></p>

      <button className='signUp--btn' type="submit">create</button>
    </div>
  )
}

export default SignUpForm