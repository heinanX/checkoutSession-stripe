import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Success from '../pages/Success';
import Failed from '../pages/Failed';

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/success" element={ <Success />} />
      <Route path="/failed" element={<Failed />} />
    </Routes>
    </>
  );
};

export default AppRoutes;