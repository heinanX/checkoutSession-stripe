import { useState } from "react";
import { useSocket as useSocketUser } from "../../../context/userContext";
import "./Dropdown_MyAccount.css";
import { Link } from "react-router-dom";

const Dropdown_MyAccount = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, logOut } = useSocketUser();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {isLoggedIn ? (
        <li
          className={`accountBtn ${isDropdownOpen ? "open" : ""}`}
          onClick={toggleDropdown}
        >
          <img
            src="../../../../src/assets/svg/user.svg"
            style={{ width: "20px", margin: 0 }}
          />
          <p className="fakeBtn">My Account ▼</p>
          {isDropdownOpen && (
            <ul className="account-menu" onMouseLeave={toggleDropdown}>
              <Link to={"/my_account"} style={{textDecoration: 'none', color: 'rgb(100, 100, 100)'}}>
                <li>My Orders</li>
              </Link>
              <li onClick={logOut}>Log out</li>
            </ul>
          )}
        </li>
      ) : (
        <></>
      )}
    </>
  );
};

export default Dropdown_MyAccount;
