import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { useSocket as useSocketUser } from "../context/userContext";

const Home = () => {
  const { checkLoginStatus } = useSocketUser();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
