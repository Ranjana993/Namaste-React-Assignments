import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './pages/Header/Header';
import Home from './components/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/ContactUs/Contact';
import DetailPage from './pages/DetailPage/DetailPage';
import Footer from './pages/Footer/Footer';
import Cart from './pages/CartPage/Cart';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/resturant/:id" element={<DetailPage />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
