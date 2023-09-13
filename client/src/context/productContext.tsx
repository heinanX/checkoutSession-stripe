/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Cart, Product, ProductContext } from "../interfaces/interfaces";

const defaultValues = {
  products: [],
  setProducts: () => { },
  getProducts: () => { },
  addToCart: () => { },
  cart: [],
  setCart: () => { },
  setCartFromLS: () => {  }
}

export const ProductContextValues = createContext<ProductContext>(defaultValues)

export const useSocket = () => useContext(ProductContextValues)

//---------------------- Provider begins here

function ProductProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Cart[]>([])

  // FUNCTION THAT FETCHES PRODUCTS FROM STRIPE
  const getProducts = async () => {
    const res = await fetch('http://localhost:3000/api/products')
    const data = await res.json();
    
    setProducts(data.productsArray)
  }

  // FUNCTION THAT ADDS PRODUCTS TO CART
  const addToCart = (productData: Product) => {
    const duplicateProduct = cart.find((cartItem) => {
      return cartItem.product.some((product) => product.id === productData.id);
    });

    if (duplicateProduct) {
      duplicateProduct.quantity += 1;
      setCart([...cart]);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const updatedCart = [
        ...cart,
        {
          product: [productData],
          quantity: 1,
        },
      ];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

    // FUNCTION THAT ADDS PRODUCTS TO CART FROM LOCALSTORAGE
  const setCartFromLS = () => {
    const cartData = localStorage.getItem("cart");
  
    if (cartData !== null) {
      const oldItems = JSON.parse(cartData) as Cart[];
      setCart(oldItems);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }

  return (
    <ProductContextValues.Provider value={{
      products,
      setProducts,
      getProducts,
      addToCart,
      cart,
      setCart,
      setCartFromLS
    }}>
      {children}
    </ProductContextValues.Provider>
  )
}

export default ProductProvider