import { useSocket as useSocketUser } from '../../../../context/userContext';
import './LeftPanel.css'

interface LeftPanelProps {
    setVisibility: (value: string) => void;
}

const LeftPanel = ({setVisibility}: LeftPanelProps) => {

    const { logOut } = useSocketUser();
    

  return (
    <div className='leftPanel--div'>
        <div className='user-div'>
            <img src="../../../../src/assets/user-pic2.png" />
            <h2>username here</h2>
        </div>
        <hr style={{borderColor: 'rgba(194, 213, 194, 0.3)', marginBottom: '10px'}} />
        <ul>
            <li onClick={() =>  setVisibility('my account')}>
                My account
            </li>
            <li onClick={() =>  setVisibility('my orders')}>
                My Orders
            </li>
            <li onClick={() =>  setVisibility('my cupons')}>
                My Cupons
            </li>
            <li onClick={logOut}>
                log Out
            </li>
        </ul>
    </div>
  )
}

export default LeftPanel