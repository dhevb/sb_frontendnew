import './App.css';
// import Navbar from './components/Navbar';
import{Route,Routes, BrowserRouter} from 'react-router-dom'
import Home from './Pages/HomePage/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './Pages/Product/ProductPage';
import Aboutus from './Pages/Extra/Aboutus';
import Contact from './Pages/Extra/Contact';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import ForgotPassword from './Pages/Auth/ForgotPassword';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/home" element={<Home/>} />
      <Route path="/product/:prodid"
        element= {
          <ProductPage/>
        }/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>



      <Route path ="*" element={<div>
        <h1>404 Not found</h1>
      </div>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
