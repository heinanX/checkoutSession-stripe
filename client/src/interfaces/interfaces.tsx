//# INTERFACE FOR PRODUCT CONTEXT

export interface ProductContext {
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    getProducts: () => void
    addToCart: (productData: Product) => void
    /*     addToCart: (productDefaultPrice: string) => void */
    cart: Cart[],
    setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
    setCartFromLS: () => void
    resetCart: () => void
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
//# INTERFACE FOR ORDER CONTEXT

export interface OrderContext {
    createCheckout: (data: SendData) => Promise<void>;
    fetchOrder: (sessionId: string) => Promise<void>;
    orderConfData: orderConfData;
    setOrderConfData: React.Dispatch<React.SetStateAction<orderConfData>>;
}

//# INTERFACE FOR PRODUCTS FROM STRIPE

export interface Product {
    id: string,
    title: string,
    description: string,
    price: number,
    default_price: string,
    images: string
}

//# INTERFACE FOR PRODUCTS IN Products.tsx and OrderReview.tsx

export interface ProductProps {
    productData: Product;
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

// # INTERFACE FOR SENDING ORDER AND CUSTOMER DATA TO BACKEND
export interface SendData {
    order: { price: string; quantity: number }[];
    userId: string;
}
// # SEPARATE INTERFACE FOR PRODUCT IN SENDING ORDER AND CUSTOMER DATA TO BACKEND
export interface ProductData {
    id: string;
    amount_discount: number;
    amount_total: number;
    description: string;
    price: {
        id: string;
        unit_amount: number;
    };
    quantity: number;
}

// # INTERFACE FOR SENDING ORDER AND CUSTOMER DATA TO BACKEND
export interface orderConfData {
    id: string;
    products: ProductData[]; 
    orderTotal: number;
    customerId: string;
    customer: string;
    status: string;
    created: number;
    discount: number;
}