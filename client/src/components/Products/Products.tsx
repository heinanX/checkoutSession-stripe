import './Products.css';
import { useSocket as useSocketProducts } from '../../context/productContext';
import { ProductProps } from '../../interfaces/interfaces';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined'

const Products = ({ productData }: ProductProps) => {
    const { addToCart } = useSocketProducts();

    return (
        <li>
            <img className="productImage" src={productData.images} alt={productData.title} />
            <h2 className='product-title'>{productData.title}</h2>
            <p className='product-description'>{productData.description}</p>

            <button className='add-product-to-cart-btn btn-style' onClick={() => addToCart(productData)}>
                <ShoppingCartIcon style={{ fontSize: '18px' }} />
                <p className='product-price'>{productData.price} kr</p>
            </button>
        </li>
    );
};

export default Products;
