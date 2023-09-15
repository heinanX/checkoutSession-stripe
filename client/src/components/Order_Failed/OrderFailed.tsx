import "./OrderFailed.css";

const OrderFailed = () => {
  return (
    <div className="orderFailed">
      <h1>Oops, something went wrong!</h1>
      <img
        src="../../src/assets/order_failed_moose.png"
        style={{ width: "500px" }}
      />
    </div>
  );
};

export default OrderFailed;
