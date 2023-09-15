/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { OrderContext, SendData, orderConfData, userOrderData } from "../interfaces/interfaces";


const defaultValues = {
  createCheckout: async (data: SendData) => { },
  fetchOrder: async (sessionId: string) => { },
  orderConfData: {
    id: '',
    products: [],
    orderTotal: 0,
    customerId: '',
    customer: '',
    status: '',
    created: 0,
    discount: 0
  },
  setOrderConfData: () => { },
  userOrders: [],
  fetchUserOrders: async () => { },

}

export const OrderContextValues = createContext<OrderContext>(defaultValues)
export const useSocket = () => useContext(OrderContextValues)

function OrderProvider({ children }: PropsWithChildren) {

  const [orderConfData, setOrderConfData] = useState<orderConfData>({
    id: '',
    products: [],
    orderTotal: 0,
    customerId: '',
    customer: '',
    status: '',
    created: 0,
    discount: 0
  });
  const [userOrders, setUserOrders] = useState<userOrderData[]>([{
    id: '',
    products: [],
    orderTotal: 0,
    customerId: '',
    customer: '',
    status: '',
    created: 0,
    discount: 0
  }]);

  async function createCheckout(data: SendData) {
    const response = await fetch("/api/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      return;
    }
    const { url } = await response.json();
    window.location = url;

  }

  const fetchOrder = async (sessionId: string) => {
    const res = await fetch(`/api/orders/${sessionId}`)
    const data = await res.json()
    setOrderConfData(data)
  }

  const fetchUserOrders = async () => {
    const res = await fetch('/api/orders')
    const data = await res.json()
    setUserOrders(data)

    console.log(data);
  }

  return (
    <OrderContextValues.Provider value={{
      createCheckout,
      fetchOrder,
      orderConfData,
      setOrderConfData,
      userOrders,
      fetchUserOrders
    }}>
      {children}
    </OrderContextValues.Provider>
  )
}

export default OrderProvider