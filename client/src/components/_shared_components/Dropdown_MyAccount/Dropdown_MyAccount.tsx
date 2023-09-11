import { useState } from 'react';
import { useSocket } from '../../../context/userContext'
import './Dropdown_MyAccount.css'

const Dropdown_MyAccount = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { isLoggedIn } = useSocket();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

/*     const handleEvent = (key) => {
        console.log(`Clicked on item with key: ${key}`);
    }; */

    return (
        <>
            {isLoggedIn ?
                <li className={`accountBtn ${isDropdownOpen ? 'open' : ''}`}
                    onClick={toggleDropdown}>
                    <img src="../../../../src/assets/svg/user.svg" style={{ width: '20px', margin: 0 }} />
                    <p className='fakeBtn'>My Account ▼</p>
                    {isDropdownOpen && (
                        <ul className="account-menu" onMouseLeave={toggleDropdown}>
                            <li>Previous Orders</li>
                            <li>My preferences</li>
                            <li>Log out</li>
                        </ul>
                    )}
                </li>
                : <></>
            }
        </>
    )
}

export default Dropdown_MyAccount