
import { useState } from 'react'
import './MyAccount.css'
import LeftPanel from './account_components/LeftPanel/LeftPanel'
import MA_Header from './account_components/MA_Header/MA_Header'
import RightPanel from './account_components/RightPanel/RightPanel'
import Footer from '../../components/Footer/Footer'
const MyAccount = () => {
    const [ visibility, setVisibility ] = useState("");
    
  return (
    <div className='myAccount-wrapper'>
        <MA_Header />
        <img src="../../../../src/assets/checkout-banner.png" alt="" />
        <div className='myAccount-container'>
            <LeftPanel setVisibility={setVisibility} />
            <RightPanel visibility={visibility} />
        </div>
        <Footer />

    </div>
  )
}

export default MyAccount