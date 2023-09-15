import OrderConfirmation from "../OrderConfirmation/OrderConfirmation";
import { useSocket as useSocketOrder } from "../../context/orderContext";
import { useSocket as useSocketProduct } from "../../context/productContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const { fetchOrder } = useSocketOrder();
  const { resetCart } = useSocketProduct();
  const location = useLocation();

  useEffect(() => {
    const queryString = location.search;
    const ssessionId = queryString.substring(4);

    if (ssessionId) {
      resetCart();
      fetchOrder(ssessionId);
    }
  }, []);

  return (
    <div className="orderSuccess">
      <img src="../../src/assets/delivery.png" style={{ width: "100px" }} />
      <h1 style={{ fontWeight: "800" }}>Thank You For Your Order!</h1>
      <p style={{ color: "rgb(100, 100, 100)" }}>
        It is now being processed and will arrive shortly
      </p>
      <div className="orderDataContainer">
        <OrderConfirmation />
      </div>
    </div>
  );
};

export default OrderSuccess;
