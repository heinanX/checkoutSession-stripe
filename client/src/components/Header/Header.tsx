import { useSocket as useSocketUser } from "../../context/userContext";
import { useSocket as useSocketProducts } from "../../context/productContext";
import Announcement from "../Announcement/Announcement";
import { Link, useLocation } from "react-router-dom";
import Dropdown_MyAccount from "../_shared_components/Dropdown_MyAccount/Dropdown_MyAccount";
import BrowseSectionLink from "../_shared_components/BrowseSectionLink/BrowseSectionLink";
import { useEffect } from "react";
import BuyBtn from "../_smaller_components/BuyBtn";
import PopUp from "../PopUp/PopUp";
import "./Header.css";

const Header = () => {
  const {
    loginVisibility,
    signUpVisibility,
    setLoginVisibility,
    isLoggedIn,
    setIsLoggedIn,
  } = useSocketUser();
  const { setCartFromLS } = useSocketProducts();

  const {pathname} = useLocation();

  useEffect(() => {
    setCartFromLS();
    if (localStorage.getItem("user")) {
      setIsLoggedIn(true);
    }
  }, []);

  const showLogin = () => {
    setLoginVisibility(true);
  };

  return (
    <header>
      <div className="header-wrapper">
        <div className="header-content">
          <Link to="/">
            <img
              src="../../../../src/assets/coolspecs-logo.png"
              style={{ width: "200px", paddingTop: "4px" }}
            />
          </Link>
          <ul>
            <BrowseSectionLink />
            <li className="fakeBtn let-space-3">About us</li>
            <li className="fakeBtn let-space-3">Contact us</li>
            <Dropdown_MyAccount />
          </ul>
          <div className="btns--div">
            {!isLoggedIn ? (
              <button className="btn" onClick={showLogin}>
                Log in
              </button>
            ) : (
              <></>
            )}
            <div className="cartIndicator-div">
              <Link to={"/checkout"} style={{textDecoration: 'none'}}>
                <BuyBtn />
              </Link>
            </div>
          </div>
        </div>
        {pathname === "/" ? (
          <Announcement />
        ) : (
          <hr style={{ borderColor: "rgba(194, 213, 194, 0.2)" }} />
        )}

        {loginVisibility || signUpVisibility ? <PopUp /> : <></>}
      </div>
    </header>
  );
};

export default Header;
