import { useEffect, useState } from 'react'
import './Main.css'
import { useSocket as useSocketProducts } from '../../context/productContext'
import Products from '../Products/Products'

const Main = () => {

  const { products, getProducts} = useSocketProducts()
  const [loading, setLoading] = useState(true);


  useEffect(()=> {
    getProducts()
    
  }, [])

  useEffect(() => {
    setLoading(false)

  }, [products])

  return (
   
    <main id='main'>
      <img src="../../../../src/assets/ad-Capture.PNG" style={{ width: '100%', display: 'block' }} />
      <h2 className='h2-title-styling'>Featured Products:</h2>
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