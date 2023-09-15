import { useSocket as useSocketOrder } from '../../../../context/orderContext'
import './MyOrders.css'


const MyOrders = () => {

const { userOrders } = useSocketOrder();
 //console.log('here ', userOrders);
 
  
  
  userOrders.forEach((element) =>{
    console.log('from here', element.created);
  })

  return (
    <>
      <h4 className='myOrders-h4'>Order History:</h4>
      <ul className='myOrders'>
        <li>hel</li>
        <li>my orders</li>
        <li>my orders</li>
        <li>my orders</li>
      </ul>
    </>
  )
}

export default MyOrders