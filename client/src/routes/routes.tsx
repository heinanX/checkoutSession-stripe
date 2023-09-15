import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Success from "../pages/Success/Success";
import Failed from "../pages/Failed/Failed";
import CheckOut from "../pages/CheckOut/CheckOut";
import MyAccount from "../pages/MyAccount/MyAccount";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/my_account" element={<MyAccount />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
