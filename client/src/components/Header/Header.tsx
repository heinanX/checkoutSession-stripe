import { useSocket as useSocketUser } from "../../context/userContext";
import { useSocket as useSocketProducts } from "../../context/productContext";
import PopUp from "../PopUp/PopUp";
import "./Header.css";
import Announcement from "../Announcement/Announcement";
import { Link } from "react-router-dom";
import Dropdown_MyAccount from "../_shared_components/Dropdown_MyAccount/Dropdown_MyAccount";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import BrowseSectionLink from "../_shared_components/BrowseSectionLink/BrowseSectionLink";
import { useEffect } from "react";

const Header = () => {
  const { loginVisibility, signUpVisibility, setLoginVisibility, isLoggedIn, setIsLoggedIn } =
    useSocketUser();
  const { cart, setCartFromLS } = useSocketProducts();

  useEffect(()=> {
    setCartFromLS();
    if (localStorage.getItem('user')) {
      setIsLoggedIn(true)
    }
    
  }, [])

  const showLogin = () => {
    setLoginVisibility(true);
  };

  const cartCounter = () => {
    let num = 0;
    cart.forEach((item) => {
      num += item.quantity;
    });
    return num;
  };

  return (
    <header>
      <div className="header-wrapper">
        <div className="header-content">
          <Link to="/">
            <img
              src="../../../../src/assets/coolspecs-logo.png"
              style={{ width: "200px" }}
            />
          </Link>
          <ul>
            <BrowseSectionLink />
            <li className="fakeBtn">About us</li>
            <li className="fakeBtn">Contact us</li>
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
              <Link to={"/checkout"}>
                <button className="buyBtn btn btn-style">
                  {" "}
                  <ShoppingCartIcon style={{ fontSize: "20px" }} /> Buy now
                </button>
                {cart.length != 0 ? (
                  <p className="cartIndicator">{cartCounter()}</p>
                ) : (
                  <></>
                )}
              </Link>
            </div>
          </div>
        </div>
        <Announcement />
        {loginVisibility || signUpVisibility ? <PopUp /> : <></>}
      </div>
    </header>
  );
};

export default Header;
