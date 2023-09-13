import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import UserProvider from './context/userContext.tsx'
import ProductProvider from './context/productContext.tsx'
import OrderProvider from './context/orderContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ProductProvider>
      <UserProvider>
        <OrderProvider>
        <App />
        </OrderProvider>
      </UserProvider>
    </ProductProvider>
  </BrowserRouter>,
)
