import { useSocket } from '../../context/userContext'
import { useSocket_products } from '../../context/productContext'
import PopUp from '../PopUp/PopUp'
import './Header.css'

const Header = () => {

  const { loginVisibility, signUpVisibility, setLoginVisibility } = useSocket()
  const { cart } = useSocket_products()
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

  const cartCounter = () => {
    let num = 0;
    cart.forEach((item) => {
    num += item.quantity
    })
    return num;
  }

  return (
<header>
      <div className="upper--header">
        <div className='btns--div'>
          <button className="btn" onClick={showLogin}>Log in</button>
          <div>
            <button className='buyBtn btn' onClick={handlePayment}> <img src="../../../../src/assets/svg/shopping_cart.svg" style={{ width: '18px', margin: 0 }} /> Buy now</button>
            {cart.length != 0 ? <p className='cartIndicator'>{cartCounter()}</p> : <></>}
          </div>

        </div>
        <img src="../../../../src/assets/coolspecs-logo.png" style={{ width: '300px' }} />
      </div>
      <nav className='lower--header'>
        <ul>
          <li className='fakeBtn'>Account settings</li>
          <li className='fakeBtn'>Browse section</li>
          <li className='fakeBtn'>Contact us</li>
        </ul>
      </nav>
      {loginVisibility || signUpVisibility ? <PopUp /> : <></>}
    </header>
  )
}

export default Header