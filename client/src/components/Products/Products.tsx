/* eslint-disable react-hooks/exhaustive-deps */
//import { useEffect, useState } from 'react';
import './Products.css';
import { useSocket_products } from '../../context/productContext';
import { ProductProps } from '../../interfaces/interfaces';


const Products = ({ productData }: ProductProps) => {
    const { addToCart } = useSocket_products();
    //const [price, setPrice] = useState<number | null>(null);

/* 
    const fetchPrice = async () => {
        try {
            const res = await fetch(`/api/products/price/${productData.default_price}`);
            const data = await res.json();
            setPrice(data);
        } catch (error) {
            console.error('Error fetching price:', error);
        }
    };

    useEffect(() => {
        fetchPrice();
    }, [productData.default_price]); */

    return (
        <li>
            <img className="productImage" src={productData.images[0]} alt={productData.name} />
            <h2 className='product-title'>{productData.name}</h2>
            <p className='product-description'>{productData.description}</p>

            <button className='add-product-to-cart-btn btn-style' onClick={() => addToCart(productData)}>
            <img src="../../../../src/assets/svg/shopping_cart.svg" style={{ width: '18px' }} />
                    <p className='product-price'>{productData.default_price} kr</p>

            </button>
        </li>
    );
};

export default Products;
