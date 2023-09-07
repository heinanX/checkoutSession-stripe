import './Products.css'
import { useSocket_products } from '../../context/productContext'
import { Product } from '../../interfaces/interfaces'

interface ProductProps {
    productData: Product
}

const Products = ({ productData }: ProductProps ) => {

    const { addToCart } = useSocket_products()
    
    return (
        <li>
            <img className='productImage' src={productData.images[0]} alt={productData.name} />
            <h2>{productData.name}</h2>
            <p>{productData.description}</p>
            <button onClick={() => { addToCart(productData)} }>Add to cart</button>
        </li>
    
  )
}

export default Products