import { useEffect } from "react";
import Header from "../../components/Header/Header";
import OrderSuccess from "../../components/Order_Success/OrderSuccess";
import { useSocket as useSocketUser } from "../../context/userContext";

const Success = () => {
  const { isLoggedIn } = useSocketUser();

  useEffect(() => {
    console.log(isLoggedIn);
  }, []);

  return (
    <>
      <Header />
      <OrderSuccess />
    </>
  );
};

export default Success;
