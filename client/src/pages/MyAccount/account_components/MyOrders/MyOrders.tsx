import { useState } from "react";
import { useSocket as useSocketOrder } from "../../../../context/orderContext";
import { userOrderData } from "../../../../interfaces/interfaces";
import "./MyOrders.css";

const MyOrders = () => {
  const [showOrder, setShowOrder] = useState(false);
  const [orderContent, setOrderContent] = useState<userOrderData | null>(null);
  const { userOrders } = useSocketOrder();

  const showFullOrder = (orderItem: userOrderData) => {
    setOrderContent(orderItem);
    setShowOrder(true);
  };
  const resetOrderView = () => {
    setOrderContent(null);
    setShowOrder(false);
  };

  return (
    <>
      <h4 className="myOrders-h4">Order History:</h4>
      <ul className="myOrders">
        {!showOrder ? (
          userOrders.map((element) => (
            <li key={element.id}>
              <p onClick={() => showFullOrder(element)}>{element.created}</p>
            </li>
          ))
        ) : (
          <li className="fullOrder">
            <p>Date: {orderContent?.created}</p>
            <span className="fullOrder-products">
              <div>
                <p style={{ width: "20%", fontWeight: "600" }}>Qty:</p>
                <p style={{ width: "30%", fontWeight: "600" }}>Price:</p>
                <p
                  style={{ width: "50%", fontWeight: "600", textAlign: "end" }}
                >
                  Product:
                </p>
              </div>
              {orderContent?.products.map((product) => (
                <div key={product.id}>
                  <p style={{ width: "20%" }}>{product.quantity}</p>
                  <p style={{ width: "30%" }}>
                    {product.price.unit_amount / 100} kr
                  </p>
                  <p style={{ width: "50%", textAlign: "end" }}>
                    {product.description}
                  </p>
                </div>
              ))}
              <hr />
              <span className="fullOrder-price">
                {orderContent?.discount !== undefined &&
                  orderContent?.discount > 0 && (
                    <>
                      <p>
                        Total price:{" "}
                        {(orderContent?.orderTotal ?? 0) +
                          orderContent?.discount}{" "}
                        kr
                      </p>
                      <p>
                        Discount:{" "}
                        <b style={{ color: "rgb(183, 118, 118)" }}>
                          -{orderContent?.discount} kr
                        </b>
                      </p>
                    </>
                  )}
                <p>
                  Final total: <b>{orderContent?.orderTotal} kr</b>
                </p>
                {orderContent?.status ? (
                  <p>
                    Payment status:{" "}
                    <span style={{ color: "rgb(95 115 96)" }}>paid</span>
                  </p>
                ) : (
                  <p>awaiting payment</p>
                )}
              </span>
            </span>
            <button className="resetOrderViewBtn" onClick={resetOrderView}>
              return
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default MyOrders;
