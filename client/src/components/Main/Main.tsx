import { useEffect, useState } from 'react'
//import Announcement from '../Announcement/Announcement'
import './Main.css'
import { useSocket_products } from '../../context/productContext'
import Products from '../Products/Products'
import { Cart } from '../../interfaces/interfaces'

const Main = () => {

  const { products, getProducts, setCart} = useSocket_products()
  const [loading, setLoading] = useState(true);
  
  const setCartFromLS = () => {
    const cartData = localStorage.getItem("cart");
  
    if (cartData !== null) {
      const oldItems = JSON.parse(cartData) as Cart[];
      setCart(oldItems);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }
  

useEffect(() => {
    setCartFromLS();
  }, []);

  // useEffect initiate function on mount
  useEffect(()=> {
    getProducts()
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [products])

  return (
    <main>
      <img src="../../../../src/assets/ad-Capture.PNG" style={{ width: '100%', display: 'block' }} />
{/*       <Announcement /> */}
      <div className="productList">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <ul>
          {products.map((element) => (
            <Products key={element.id} productData={element} />
          ))}
        </ul>
        )}
      </div>
    </main>
  );
};

export default Main