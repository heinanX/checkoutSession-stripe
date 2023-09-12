import { useSocket as useSocketUser  } from '../../../context/userContext'

const BtnClose = () => {
    
    const { loginVisibility, setLoginVisibility, setSignUpVisibility, signUpVisibility } = useSocketUser()

    const closeWindow = () => {
        if (loginVisibility == true) { setLoginVisibility(false)}
        if (signUpVisibility == true) { setSignUpVisibility(false)}
    }
  return (
    <button className='close-window btn' onClick={closeWindow}>X</button>
  )
}

export default BtnClose