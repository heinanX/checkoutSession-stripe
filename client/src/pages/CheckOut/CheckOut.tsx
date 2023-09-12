import { useEffect } from "react";
import OrderReview from "../../components/OrderReview/OrderReview";
import "./CheckOut.css";
import { useSocket as useSocketProducts } from "../../context/productContext";
import { Link } from "react-router-dom";

const CheckOut = () => {

  const { setCartFromLS, cart } = useSocketProducts()

  useEffect(() => {
    setCartFromLS()
  }, [])

  const totalPrice = () => {
    let num = 0;
    cart.forEach((item) => {
      item.product.forEach((cost) => {
        const mult = item.quantity * parseInt(cost.default_price)
        num += mult
      })
    })
    return num;
  }
  
  return (
    <div className="checkout-page">
      <img className="checkout-banner" src="../../../../src/assets/checkout-banner.png" />
      <div className="order-content">
        <h2>Order review</h2>
        <div className="cart-review">
          <ul>
            {cart.map((element, index) => (
              <OrderReview key={index} cartItem={element} />
            ))}
          </ul>
          <hr style={{ width: '80%', borderColor: 'rgba(194, 213, 194, 0.5' }} />
          <p className="order-total-sum">Order total:<b> {totalPrice()} kr</b></p>
          <button className="confirm-order-btn">Place Order</button>
        </div>
        <Link to={'/'}>
          <button className="leave-cart-btn">← back to store</button>
        </Link>
      </div>

    </div>
  );
};

export default CheckOut;
