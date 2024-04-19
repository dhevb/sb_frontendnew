import './App.css';
// import Navbar from './Navbar/Navbar';
import{Route,Routes, BrowserRouter} from 'react-router-dom'
import Home from './Pages/HomePage/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/home" element={<Home/>} />
      <Route path ="*" element={<div>
        <h1>404 Not found</h1>
      </div>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
