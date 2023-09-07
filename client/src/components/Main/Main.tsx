import { useEffect, useState } from 'react'
import Announcement from '../Announcement/Announcement'
import './Main.css'
import { useSocket } from '../../context/productContext'
import Products from '../Products/Products'

const Main = () => {

  const { products, setProducts} = useSocket()
  const [loading, setLoading] = useState(false);
  
  const fetchData = async () => {
    const res = await fetch('http://localhost:3000/api/products')
    const response = await res.json();
    
    setProducts(response.productinfo)
  }

  // useEffect initiate function on mount
  useEffect(()=> {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(products)
    setLoading(true)
  }, [products])

  return (
    <main>
      <img src="../../../../src/assets/ad-Capture.PNG" style={{ width: '100%', display: 'block' }} />
      <Announcement />

      <div className="productlist">
        {loading ? (
          <ul>
            {products.map((element) => (
              <Products key={element.id} productData={element} />
            ))}
          </ul>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </main>
  );
};

export default Main