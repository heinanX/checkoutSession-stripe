import { useSocket as useSocketUser } from '../../../../context/userContext'
import { Link } from "react-router-dom";
import BrowseSectionLink from "../../../../components/_shared_components/BrowseSectionLink/BrowseSectionLink";
import { useEffect } from "react";
import './MA_Header.css'

const MA_Header = () => {
  const {
    setIsLoggedIn,
  } = useSocketUser();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsLoggedIn(true);
    }
  }, []);

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
            <li className="fakeBtn">About us</li>
            <li className="fakeBtn">Contact us</li>
          </ul>

        </div>

        <hr style={{ borderColor: "rgba(194, 213, 194, 0.2)" }} />

      </div>
    </header>
  );
};

export default MA_Header;
