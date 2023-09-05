import { useSocket } from '../../context/userContext'
import PopUp from '../PopUp/PopUp'
import './Header.css'

const Header = () => {

  const { loginVisibility, signUpVisibility, setLoginVisibility } = useSocket()
  const showLogin = () => {
    setLoginVisibility(true)
  }

  return (
    <header>
      {/* <h2>coolSpecs</h2> */}
      <img src="../../../../src/assets/coolspecs-logo-br2.png" style={{width: '300px'}} />

      <div className='header--div'>
        <button onClick={showLogin}>Log in</button>
        <button>Basket</button>
      </div>
      {loginVisibility || signUpVisibility ? <PopUp /> : <></> }

    </header>
  )
}

export default Header