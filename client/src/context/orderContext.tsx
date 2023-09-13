/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { OrderContext, SendData } from "../interfaces/interfaces";
const defaultValues = {
  createCheckout: async (data: SendData) => { }
}

export const OrderContextValues = createContext<OrderContext>(defaultValues)
export const useSocket = () => useContext(OrderContextValues)

function OrderProvider({ children }: PropsWithChildren) {

  async function createCheckout(data: SendData) {


    console.log(data);
    
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
  return (
    <OrderContextValues.Provider value={{
      createCheckout,
    }}>
      {children}
    </OrderContextValues.Provider>
  )
}

export default OrderProvider