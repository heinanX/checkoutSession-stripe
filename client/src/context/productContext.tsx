import { PropsWithChildren, createContext, useContext, useState } from "react";

export interface Product {
    id: string,
    name: string,
    description: string,
    default_price: string
    images: []
}


export interface ProductContext {
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

const defaultValues = {
    products: [],
    setProducts: () => {  },
}

export const ProductContextValues = createContext<ProductContext>(defaultValues)
export const useSocket = () => useContext(ProductContextValues)

function ProductProvider({ children }: PropsWithChildren) {
    const [products, setProducts] = useState<Product[]>([]) 

  return (
    <ProductContextValues.Provider value={{
        products,
        setProducts
        }}>
      {children}
    </ProductContextValues.Provider>
  )
}

export default ProductProvider