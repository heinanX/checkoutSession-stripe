import { PropsWithChildren, createContext, useContext, useState } from "react";

export interface Product {
    id: string,
    name: string,
    description: string,
    default_price: string
    images: string[]
}


export interface ProductContext {
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    getProducts: () => void
}

const defaultValues = {
    products: [],
    setProducts: () => {  },
    getProducts: () => {  }
}

export const ProductContextValues = createContext<ProductContext>(defaultValues)
export const useSocket = () => useContext(ProductContextValues)

function ProductProvider({ children }: PropsWithChildren) {
    const [products, setProducts] = useState<Product[]>([])

    const getProducts = async () => {
        const res = await fetch('http://localhost:3000/api/products')
        const response = await res.json();
        
        setProducts(response.productinfo)
      }

  return (
    <ProductContextValues.Provider value={{
        products,
        setProducts,
        getProducts
        }}>
      {children}
    </ProductContextValues.Provider>
  )
}

export default ProductProvider