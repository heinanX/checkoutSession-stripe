import { useSocket as useSocketUser  } from '../../../context/userContext'
import HighlightOffIcon from "@mui/icons-material/HighlightOffOutlined";
import './BtnClose.css';

const BtnClose = () => {
    
    const { loginVisibility, setLoginVisibility, setSignUpVisibility, signUpVisibility } = useSocketUser()

    const closeWindow = () => {
        if (loginVisibility == true) { setLoginVisibility(false)}
        if (signUpVisibility == true) { setSignUpVisibility(false)}
    }
  return (
    <button className='close-window' onClick={closeWindow}>
      <HighlightOffIcon className='highlightOffIcon' />
    </button>
  )
}

export default BtnClose