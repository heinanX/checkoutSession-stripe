import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Cart, Product, ProductContext } from "../interfaces/interfaces";

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
export const useSocket_products = () => useContext(ProductContextValues)

//---------------------- Provider begins here

function ProductProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Cart[]>([])

  // FUNCTION THAT FETCHES PRODUCTS FROM STRIPE
  const getProducts = async () => {
    const res = await fetch('http://localhost:3000/api/products')
    const response = await res.json();

    setProducts(response.productinfo)
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
      //console.log('increment item', cart);
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
      //console.log('item added ', updatedCart);
    }
  };



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