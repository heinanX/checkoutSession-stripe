/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { OrderContext } from "../interfaces/interfaces";
const defaultValues = {
  createCheckout: async (order: { price: string; quantity: number }[]) => { }
}

export const OrderContextValues = createContext<OrderContext>(defaultValues)
export const useSocket = () => useContext(OrderContextValues)

function OrderProvider({ children }: PropsWithChildren) {

  async function createCheckout(order: { price: string; quantity: number }[]) {


    console.log(order);
    
    const response = await fetch("/api/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
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