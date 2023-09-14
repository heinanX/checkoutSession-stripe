import { useSocket as useSocketOrder } from '../../context/orderContext';
import './OrderConfirmation.css'

const OrderConfirmation = () => {
    const { orderConfData } = useSocketOrder()
    console.log('this is from here ', orderConfData);

    return (
        <>
            <h4 style={{ textAlign: 'center', padding: '2em 0' }}>A mail has been sent to {orderConfData.customer}</h4>
            <p></p>
            <div className="colored--div">
                <p>Order Confirmation:</p>
            </div>
            <ul>
                <li className='order-span-setting sm-p'>
                    <p className='bold-p'>ID:</p>
                    <p className='ocd-id'>{orderConfData.id}</p>
                </li>

                <li>
                    <ul>
                        <p className='bold-p sm-p' style={{ margin: '10px, 0', paddingLeft: '10px' }}>Products:</p>
                        {orderConfData.products.map((product) => (
                            <li key={product.id} className='orderConfData-products'>
                                <p className='ocd-desc'>{product.description}</p>
                                <p className='ocd-price'>{product.amount_total / 100} kr</p>
                                <p className='ocd-quan'>{product.quantity}st</p>
                            </li>
                        ))}
                    </ul>
                </li>

                <li className='sm-p order-span-setting'>
                    <p className='bold-p'>Order Total:</p>
                    <p>{orderConfData.orderTotal}</p>
                </li>

            </ul>
        </>
    )

}

export default OrderConfirmation
/* 
{orderConfData ? (

    {orderConfData.map((product) => (
            <li>
                
    ))



    <h1></h1>

</li>        ) : (
<p>No order data available.</p>
)} */