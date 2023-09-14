import { useEffect } from "react";
import OrderReview from "../../components/OrderReview/OrderReview";
import "./CheckOut.css";
import { useSocket as useSocketProducts } from "../../context/productContext";
import { useSocket as useSocketOrder } from "../../context/orderContext";
import { Link } from "react-router-dom";
import { SendData } from "../../interfaces/interfaces";

const CheckOut = () => {
  const { setCartFromLS, cart } = useSocketProducts();
  const { createCheckout } = useSocketOrder();

  useEffect(() => {
    setCartFromLS();    
  }, []);

  const totalPrice = () => {
    let num = 0;
    cart.forEach((item) => {
      item.product.forEach((cost) => {
        const mult = item.quantity * cost.price;
        num += mult;
      });
    });
    return num;
  };

  const handlePayment = () => {
    const newArray: { price: string; quantity: number }[] = [];
    cart.forEach((cartItem) => {
      cartItem.product.forEach((item) => {
        const newObject = {
          price: item.default_price,
          quantity: cartItem.quantity,
        };
        newArray.push(newObject);
      });
    });

    const storedData = localStorage.getItem("user");
    if (storedData) {
      const userData = JSON.parse(storedData);
      const sendData: SendData = {
        order: newArray,
        userId: userData.id
      }
      createCheckout(sendData)
    }


  };

  return (
    <div className="checkout-page">
      <img
        className="checkout-banner"
        src="../../../../src/assets/checkout-banner.png"
      />
      <div className="order-content">
        <h2>Order review</h2>
        <div className="cart-review">
          <ul>
            {cart.map((element, index) => (
              <OrderReview key={index} cartItem={element} />
            ))}
          </ul>
          <hr
            style={{ width: "80%", borderColor: "rgba(194, 213, 194, 0.5" }}
          />
          <p className="order-total-sum">
            Order total:<b> {totalPrice()} kr</b>
          </p>
          <button className="confirm-order-btn" onClick={handlePayment}>
            Place Order
          </button>
        </div>
        <Link to={"/"}>
          <button className="leave-cart-btn">← back to store</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
