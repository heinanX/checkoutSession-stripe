/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { OrderContext, SendData, orderConfData } from "../interfaces/interfaces";


const defaultValues = {
  createCheckout: async (data: SendData) => { },
  fetchOrder: async (sessionId: string) => {  },
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
  setOrderConfData: () => { }
}

export const OrderContextValues = createContext<OrderContext>(defaultValues)
export const useSocket = () => useContext(OrderContextValues)

function OrderProvider({ children }: PropsWithChildren) {

  //## UseStates

  const [orderConfData, setOrderConfData ] = useState<orderConfData>({ 
    id: '',
    products: [], 
    orderTotal: 0,
    customerId: '',
    customer: '',
    status: '',
    created: 0,
    discount: 0
  });

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

  return (
    <OrderContextValues.Provider value={{
      createCheckout,
      fetchOrder,
      orderConfData,
      setOrderConfData 
    }}>
      {children}
    </OrderContextValues.Provider>
  )
}

export default OrderProvider