import './Products.css'
import { Product } from '../../context/productContext'

interface ProductProps {
    productData: Product
}

const Products = ({ productData }: ProductProps ) => {
    console.log(productData);
    return (
        <div>hello</div>
    
  )
}

export default Products