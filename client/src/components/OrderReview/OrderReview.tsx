import "./OrderReview.css";
import { Cart } from "../../interfaces/interfaces";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSocket as useSocketUser } from "../../context/userContext";
import { useEffect } from "react";
import PopUp from "../PopUp/PopUp";

const OrderReview = ({ cartItem }: { cartItem: Cart }) => {
  const { setLoginVisibility, loginVisibility, signUpVisibility, isLoggedIn } =
    useSocketUser();

  const deleteItem = (item: string) => {
    console.log("item deleted ", item);
  };
  const IncreaseItem = (item: string) => {
    console.log("item increased ", item);
  };
  const decreaseItem = (item: string) => {
    console.log("item decreased ", item);
  };

  useEffect(() => {
    !isLoggedIn ? setLoginVisibility(true) : null;
  }, []);

  return (
    <li className="checkout-item">
      {cartItem.product.map((item) => (
        <span key={item.id}>
          <span className="product-info">
            <img src={item.images} style={{ width: "50px" }} />
            <h3>{item.title}</h3>
          </span>

          <span className="quantity-container">
            <button
              onClick={() => decreaseItem(item.id)}
              className="decreaseQuantity"
            >
              -
            </button>
            <p>{cartItem.quantity}</p>
            <button
              onClick={() => IncreaseItem(item.id)}
              className="increaseQuantity"
            >
              +
            </button>
            <a onClick={() => deleteItem(item.id)} className="delete-icon">
              <DeleteIcon />
            </a>
          </span>
        </span>
      ))}
      {loginVisibility || signUpVisibility ? <PopUp /> : <></>}
    </li>
  );
};

export default OrderReview;
