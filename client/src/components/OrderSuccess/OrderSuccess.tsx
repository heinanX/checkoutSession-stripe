import { useState } from 'react'
import './OrderSuccess.css'

const OrderSuccess = () => {
    const [fetchedData, setFetchedData] = useState()

    const fetchOrderId = async () => {
        

        const res = await fetch('/api/create-checkout-session')
        const data = await res.json()
        setFetchedData(data)
    }

    return (
        <div className='orderSuccess'>
            <h1>Thank you for placing an order!</h1>
            <img src="../../src/assets/order_success_moose.jpg" style={{ width: '500px' }} />
            { fetchedData ? <>
                
            </> :
            <></> }
        </div>
    )
}

export default OrderSuccess