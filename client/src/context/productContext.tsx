import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Product, ProductContext } from "../interfaces/interfaces";

const defaultValues = {
  products: [],
  setProducts: () => { },
  getProducts: () => { },
  addToCart: () => { },
  cart: [],
  setCart: () => { }
}

export const ProductContextValues = createContext<ProductContext>(defaultValues)
// eslint-disable-next-line react-refresh/only-export-components
export const useSocket = () => useContext(ProductContextValues)

//---------------------- Provider begins here

function ProductProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([])
  const [ cart, setCart ] = useState<object[]>([])
  const basket: object[] = []

  // FUNCTION THAT FETCHES PRODUCTS FROM STRIPE
  const getProducts = async () => {
    const res = await fetch('http://localhost:3000/api/products')
    const response = await res.json();

    setProducts(response.productinfo)
  }

  // FUNCTION THAT ADDS PRODUCTS TO CART
  const addToCart = (productData: object) => {
    //console.log(productData)
    basket.push(productData)
    console.log(basket);
    

  }

  return (
    <ProductContextValues.Provider value={{
      products,
      setProducts,
      getProducts,
      addToCart,
      cart,
      setCart
    }}>
      {children}
    </ProductContextValues.Provider>
  )
}

export default ProductProvider