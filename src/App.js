import "./App.css";
// import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Cart from "./Pages/Cart/Cart";
import Aboutus from "./Pages/Extra/Aboutus";
import Contact from "./Pages/Extra/Contact";
import PageNotFound from "./Pages/Extra/PageNotFound";
import Home from "./Pages/HomePage/Home";
import ProductPage from "./Pages/Product/ProductPage";
import UserProfile from "./Pages/User/UserProfile";
import Books from "./categories/Books/Books";
import HerbalProducts from "./categories/HerbalProducts/HerbalProducts";
import Bicycle from "./categories/Bicycle/Bicycle"
import Decoration from "./categories/Decoration/Decoration";
import Termsandconditions from "./Pages/Extra/TermsandCondtion";
import PrivacyPolicy from "./Pages/Extra/PrivacyPolicy";
import FAQ from "./Pages/Extra/FAQ";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:prodid" element={<ProductPage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:activepage" element={<UserProfile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/books" element={<Books />} />
        <Route path="/herbalproducts" element={<HerbalProducts/>} />
        <Route path="/bicycle" element={<Bicycle/>} />
        <Route path="/decoration" element={<Decoration/>} />
        <Route path ="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path ="/FAQ" element={<FAQ/>}/>


        <Route path ="/termsandcondition" element={<Termsandconditions/>}/>
        

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
