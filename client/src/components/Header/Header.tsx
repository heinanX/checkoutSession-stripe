import { useSocket as useSocketUser  } from '../../context/userContext'
import { useSocket as useSocketProducts } from '../../context/productContext'
import PopUp from '../PopUp/PopUp'
import './Header.css'
import Announcement from '../Announcement/Announcement'
import { Link as ScrollLink } from 'react-scroll'
import Dropdown_MyAccount from '../_shared_components/Dropdown_MyAccount/Dropdown_MyAccount'
import { Link } from 'react-router-dom'

const Header = () => {

  const { loginVisibility, signUpVisibility, setLoginVisibility, isLoggedIn } = useSocketUser()
  const { cart } = useSocketProducts()
  const showLogin = () => {
    setLoginVisibility(true)
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
              <ScrollLink to='main' smooth={true} duration={500} offset={501} style={{textDecoration: 'none'}}>
                  Browse section
              </ScrollLink></li>
            <li className='fakeBtn'>About us</li>
            <li className='fakeBtn'>Contact us</li>
            {/* {isLoggedIn ? <li className='accountBtn fakeBtn'><p>My Account</p><img src="../../../../src/assets/svg/user.svg" style={{ width: '20px', margin: 0 }} /></li> : <></>} */}
            <Dropdown_MyAccount />
          </ul>
          <div className='btns--div'>
            {!isLoggedIn ? <button className="btn" onClick={showLogin}>Log in</button> : <></>}
            <div className='cartIndicator-div'>
              <Link to={'/checkout'}>
              <button className='buyBtn btn btn-style'> <img src="../../../../src/assets/svg/shopping_cart.svg" style={{ width: '18px', margin: 0 }} /> Buy now</button>
              {cart.length != 0 ? <p className='cartIndicator'>{cartCounter()}</p> : <></>}
              </Link>
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