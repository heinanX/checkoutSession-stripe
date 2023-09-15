import MyOrders from '../MyOrders/MyOrders';
import './RightPanel.css'

interface RightPanelProps {
    visibility: string;
}

const RightPanel = ({ visibility }: RightPanelProps) => {
    let content;

    switch (visibility) {
        case 'my orders':
            content = <MyOrders />
        break;

        case 'my cupons':
            content = <p>This area is still under construction. It is where eligible coupons will be stored.</p>
        break;

        default:
            content = <p>This area is still under construction. Only 'MY ORDERS' are currently available.</p>
        break;
    }

    return (
        <div className='rightPanel--div'>{content}</div>
    )
}

export default RightPanel