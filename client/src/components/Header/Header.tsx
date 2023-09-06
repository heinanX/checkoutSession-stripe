import { useSocket } from '../../context/userContext'
import PopUp from '../PopUp/PopUp'
import './Header.css'

const Header = () => {

  const { loginVisibility, signUpVisibility, setLoginVisibility } = useSocket()
  const showLogin = () => {
    setLoginVisibility(true)
  }

  async function handlePayment() {
    console.log('button is up and running');
    
/*     const response = await fetch(
      "http://localhost:3000/create-checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(['']),
      }
    );

    if (!response.ok) {
      return;
    }
    const { url } = await response.json();
    console.log( url );
    console.log('hello');
    
    
    window.location = url; */

  }

  return (
    <header>
      <img src="../../../../src/assets/coolspecs-logo-br2.png" style={{ width: '300px' }} />

      <div className='header--div'>
        <button onClick={showLogin}>Log in</button>
        <button className='buyBtn' onClick={ handlePayment }> <img src="../../../../src/assets/svg/shopping_cart.svg" style={{width:'18px', margin: 0}} /> Buy now</button>
      </div>
      {loginVisibility || signUpVisibility ? <PopUp /> : <></>}

    </header>
  )
}

export default Header