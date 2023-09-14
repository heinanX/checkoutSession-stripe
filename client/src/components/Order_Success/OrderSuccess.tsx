import { useLocation } from "react-router-dom";
import "./OrderSuccess.css";
import { useEffect } from "react";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation";
import { useSocket as useSocketOrder } from "../../context/orderContext";

const OrderSuccess = () => {
  const { fetchOrder, orderConfData } = useSocketOrder();
  const location = useLocation();

  useEffect(() => {
    const queryString = location.search;
    const ssessionId = queryString.substring(4);

    console.log(ssessionId);

    if (ssessionId) {
      fetchOrder(ssessionId);
    }
  }, []);

  console.log(orderConfData);

  return (
    <div className="orderSuccess">
      <img src="../../src/assets/delivery.png" style={{ width: "100px" }} />
      <h1 style={{ fontWeight: "800" }}>Thank You For Your Order!</h1>
      <div className="orderDataContainer">
        <OrderConfirmation />
      </div>
    </div>
  );
};

export default OrderSuccess;
