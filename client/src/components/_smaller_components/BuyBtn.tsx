import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSocket as useSocketProducts } from "../../context/productContext";

const BuyBtn = () => {
  const { cart } = useSocketProducts();

  const cartCounter = () => {
    let num = 0;
    cart.forEach((item) => {
      num += item.quantity;
    });
    return num;
  };

  return (
    <>
      <button className="buyBtn btn btn-style">
        <ShoppingCartIcon style={{ fontSize: "20px" }} /> Buy now
      </button>
      {cart.length != 0 ? (
        <p className="cartIndicator">{cartCounter()}</p>
      ) : (
        <></>
      )}
    </>
  );
};

export default BuyBtn;
