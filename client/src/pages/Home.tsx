import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
import { useSocket } from '../context/userContext'

const Home = () => {
  const { checkLoginStatus } = useSocket();

  useEffect(() => {
   checkLoginStatus()
   //setCart()
  }, []);

  return (
    <>
        <Header />
        <Main />
        <Footer />
    </>
  )
}

export default Home