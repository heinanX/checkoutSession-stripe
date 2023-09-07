import './Products.css'
import { Product } from '../../context/productContext'

interface ProductProps {
    productData: Product
}

const Products = ({ productData }: ProductProps ) => {
    console.log(productData.images[0]);

    return (
        <li>
            <img className='productImage' src={productData.images[0]} alt={productData.name} />
            <h1>{productData.name}</h1>
            <p>{productData.description}</p>

        </li>
    
  )
}

export default Products