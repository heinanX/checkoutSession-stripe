import { useEffect, useState } from "react";
import LeftPanel from "./account_components/LeftPanel/LeftPanel";
import MA_Header from "./account_components/MA_Header/MA_Header";
import RightPanel from "./account_components/RightPanel/RightPanel";
import Footer from "../../components/Footer/Footer";
import { useSocket as useSocketUser } from "../../context/userContext";
import "./MyAccount.css";

const MyAccount = () => {
  const [visibility, setVisibility] = useState("");
  const { isLoggedIn } = useSocketUser();

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/";
    }
  }, [isLoggedIn]);

  return (
    <div className="myAccount-wrapper">
      <MA_Header />
      <img src="../../../../src/assets/checkout-banner.png" />
      <div className="myAccount-container">
        <LeftPanel setVisibility={setVisibility} />
        <RightPanel visibility={visibility} />
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
