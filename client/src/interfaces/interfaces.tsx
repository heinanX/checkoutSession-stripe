//# INTERFACE FOR PRODUCT CONTEXT

export interface ProductContext {
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    getProducts: () => void
    addToCart: (productData: Product) => void
/*     addToCart: (productDefaultPrice: string) => void */
    cart: Cart[],
    setCart: React.Dispatch<React.SetStateAction<Cart[]>>
}

//# INTERFACE FOR USER CONTEXT


export interface UserContext {
    loginVisibility: boolean
    setLoginVisibility: React.Dispatch<React.SetStateAction<boolean>>
    signUpVisibility: boolean
    setSignUpVisibility: React.Dispatch<React.SetStateAction<boolean>>
    isLoggedIn: boolean
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    login: (mail: string, pass: string) => Promise<void>
    signUp: (uname: string, mail: string, pass: string) => Promise<void>
    logOut: () => Promise<void>
    checkLoginStatus: () => Promise<void>
}

//# INTERFACE FOR PRODUCTS FROM STRIPE

export interface Product {
    id: string,
    name: string,
    description: string,
    default_price: string
    images: string[]
}

//# INTERFACE FOR PRODUCTS FROM STRIPE
export interface Cart {
    product: Product[],
    quantity: number
}

//# INTERFACE FOR USERS FROM LOCAL USERS.JSON FILE

export interface User {
    email: string,
    password: string,
    description: string,
}