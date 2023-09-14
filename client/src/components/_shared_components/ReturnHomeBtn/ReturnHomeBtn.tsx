import { Link } from "react-router-dom";

const ReturnHomeBtn = () => {
  return (
    <Link to={"/"}>
        <button className="leave-cart-btn">← back to store</button>
  </Link>
  )
}

export default ReturnHomeBtn