import { useSocket } from '../../context/userContext'
import { useSocket_products } from '../../context/productContext'
import PopUp from '../PopUp/PopUp'
import './Header.css'
import Announcement from '../Announcement/Announcement'
import { Link } from 'react-scroll'
import Dropdown_MyAccount from '../_shared_components/Dropdown_MyAccount/Dropdown_MyAccount'

const Header = () => {

  const { loginVisibility, signUpVisibility, setLoginVisibility, isLoggedIn } = useSocket()
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
      <div className='header-wrapper'>

        <div className="header-content">
          <img src="../../../../src/assets/coolspecs-logo.png" style={{ width: '200px' }} />
          <ul>
            <li className='fakeBtn'>
              <Link to='main' smooth={true} duration={500} offset={501} style={{textDecoration: 'none'}}>
                  Browse section
              </Link></li>
            <li className='fakeBtn'>About us</li>
            <li className='fakeBtn'>Contact us</li>
            {/* {isLoggedIn ? <li className='accountBtn fakeBtn'><p>My Account</p><img src="../../../../src/assets/svg/user.svg" style={{ width: '20px', margin: 0 }} /></li> : <></>} */}
            <Dropdown_MyAccount />
          </ul>
          <div className='btns--div'>
            {!isLoggedIn ? <button className="btn" onClick={showLogin}>Log in</button> : <></>}
            <div className='cartIndicator-div'>
              <button className='buyBtn btn' onClick={handlePayment}> <img src="../../../../src/assets/svg/shopping_cart.svg" style={{ width: '18px', margin: 0 }} /> Buy now</button>
              {cart.length != 0 ? <p className='cartIndicator'>{cartCounter()}</p> : <></>}
            </div>
          </div>

        </div>
        <Announcement />
        {loginVisibility || signUpVisibility ? <PopUp /> : <></>}
      </div>
    </header>
  )
}

export default Header