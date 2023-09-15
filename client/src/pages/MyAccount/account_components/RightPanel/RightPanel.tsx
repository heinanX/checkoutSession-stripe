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
            content = <p>this is cupons</p>
        break;

        default:
            content = <p>this is landing page</p>
        break;
    }

    return (
        <div className='rightPanel--div'>{content}</div>
    )
}

export default RightPanel