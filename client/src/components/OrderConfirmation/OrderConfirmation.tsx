import { useSocket as useSocketOrder } from "../../context/orderContext";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const { orderConfData } = useSocketOrder();


  return (
    <>
      <h4 className="noteToCustomer">
        A mail has been sent to {orderConfData.customer}
      </h4>
      <div className="colored--div">
        <p>Order Confirmation:</p>
      </div>

      <ul>
        <li className="order-li-setting sm-p">
          <p className="bold-p">Order ID:</p>
          <p className="ocd-id">{orderConfData.id}</p>
        </li>

        <li className="sm-p order-li-setting">
          <p className="bold-p">Order Date:</p>
          <p>{orderConfData.created}</p>
        </li>

        <li className="sm-p order-li-setting">
          <p className="bold-p">Order Total:</p>
          <p>{orderConfData.orderTotal} kr</p>
        </li>

        {orderConfData.discount > 0? (
          <li className="sm-p order-li-setting">
            <p className="bold-p">Order Discount:</p>
            <p>{orderConfData.discount} kr</p>
          </li>
        ) : (
          <></>
        )}

        <li>
          <ul>
            <li className="ocd-productList-headings">
              <p className="ocd-quan sm-p bold-p">Quantity:</p>
              <p className="ocd-desc sm-p bold-p">Product:</p>
              <p className="ocd-price-hdr sm-p bold-p">Price:</p>
            </li>
            {orderConfData.products.map((product) => (
              <li key={product.id} className="orderConfData-products">
                <p className="ocd-quan">{product.quantity}st</p>
                <p className="ocd-desc">{product.description}</p>
                <span className="ocd-price">
                  <p>{product.amount_total / 100} kr</p>

                  {product.quantity > 1 ? (
                    <p className="sm-p">
                      {product.amount_total / 100 / product.quantity} kr/st
                    </p>
                  ) : (
                    <></>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default OrderConfirmation;
