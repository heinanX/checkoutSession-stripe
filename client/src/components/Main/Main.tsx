import { useEffect, useState } from 'react'
import Announcement from '../Announcement/Announcement'
import './Main.css'
import { useSocket } from '../../context/productContext'
import Products from '../Products/Products'

const Main = () => {

  const { products, getProducts} = useSocket()
  const [loading, setLoading] = useState(true);
  
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
      <Announcement />
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