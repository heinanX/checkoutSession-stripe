import { useState } from 'react';
import { useSocket as useSocketUser } from '../../../context/userContext'
import './Dropdown_MyAccount.css'

const Dropdown_MyAccount = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { isLoggedIn, logOut } = useSocketUser();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleEvent = (key:string) => {
        switch (key) {
            case 'logOut':
                logOut()
                console.log('user logged out');
                
            break;
        
            case 'previousOrders':
                console.log('previousOrders')
            break;
        
            case 'myPreferences':
                console.log('myPreferences')
            break;
        }
    };

    return (
        <>
            {isLoggedIn ?
                <li className={`accountBtn ${isDropdownOpen ? 'open' : ''}`}
                    onClick={toggleDropdown}>
                    <img src="../../../../src/assets/svg/user.svg" style={{ width: '20px', margin: 0 }} />
                    <p className='fakeBtn'>My Account ▼</p>
                    {isDropdownOpen && (
                        <ul className="account-menu" onMouseLeave={toggleDropdown}>
                            <li onClick={() => { handleEvent('previousOrders') }}>Previous Orders</li>
                            <li onClick={() => { handleEvent('myPreferences') }}>My preferences</li>
                            <li onClick={() => { handleEvent('logOut') }}>Log out</li>
                        </ul>
                    )}
                </li>
                : <></>
            }
        </>
    )
}

export default Dropdown_MyAccount