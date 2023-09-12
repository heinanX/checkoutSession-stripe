import { useEffect } from "react";
import OrderReview from "../../components/OrderReview/OrderReview";
import "./CheckOut.css";
import { useSocket as useSocketProducts } from "../../context/productContext";

const CheckOut = () => {

  //const getItemsFromLS = JSON.parse(localStorage.getItem('cart'))
  const { setCartFromLS, cart } = useSocketProducts()

  useEffect(() => {
    setCartFromLS()

  }, [])
  /* cart.forEach((cartItem) => {
    cartItem.product.forEach((item) => {
      console.log(item.id);
    });
  }); */

  return (
    <div className="checkout-page">
      <img
        className="checkout-banner" src="../../../../src/assets/checkout-banner.png" alt=""
      />
      <div className="order-content">
        <h2>Order review</h2>
        <div className="cart-review">
          <ul>
            {cart.map((element, index) => (
              <OrderReview key={index} cartItem={element} />
            ))}

          </ul>
          <hr style={{ width: '80%', borderColor: 'rgba(194, 213, 194, 0.5' }} />
          <button className="confirm-order-btn">Place Order</button>
        </div>
      </div>
      <button className="leave-cart-btn" onClick={() => { window.location.href = 'http://localhost:5173' }}>← back to store</button>
    </div>
  );
};

export default CheckOut;
