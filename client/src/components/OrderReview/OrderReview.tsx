import "./OrderReview.css";
import { Cart } from "../../interfaces/interfaces";
import DeleteIcon from "@mui/icons-material/Delete";

const OrderReview = ({ cartItem }: { cartItem: Cart }) => {

    const deleteItem = (item: string) => {
        console.log('item deleted ',item);
    };
    const IncreaseItem = (item: string) => {
        console.log('item increased ',item);
    };
    const decreaseItem = (item: string) => {
        console.log('item decreased ',item);
    };

    return (
        <li className="checkout-item">
            {cartItem.product.map((item) => (
                <span key={item.id}>
                    <span className="product-info">
                        <img src={item.images} style={{ width: "50px" }} />
                        <h3>{item.title}</h3>
                    </span>

                    <span className="quantity-container">
                        <button onClick={() => decreaseItem(item.id)} className="decreaseQuantity">-</button>
                        <p>{cartItem.quantity}</p>
                        <button onClick={() => IncreaseItem(item.id)} className="increaseQuantity">+</button>
                        <a onClick={() => deleteItem(item.id)} className="delete-icon">
                            <DeleteIcon />
                        </a>
                    </span>
                </span>
            ))}
        </li>
    );
};

export default OrderReview;
