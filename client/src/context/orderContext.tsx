/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { OrderContext } from "../interfaces/interfaces";
const defaultValues = {
    handlePayment: () => {  }
}

export const OrderContextValues = createContext<OrderContext>(defaultValues)
export const useSocket = () => useContext(OrderContextValues)

function OrderProvider({ children }: PropsWithChildren) {

    async function handlePayment() {
        console.log('button is up and running');
    
        /*     const response = await fetch(
              "http://localhost:3000/create-checkout",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(['']),
              }
            );
        
            if (!response.ok) {
              return;
            }
            const { url } = await response.json();
            console.log( url );
            console.log('hello');
            
            
            window.location = url; */
    
      }
  return (
    <OrderContextValues.Provider value={{
        handlePayment,
    }}>
      {children}
    </OrderContextValues.Provider>
  )
}

export default OrderProvider