
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SpinnerComponent from './components/SpinnerComponent';
import Checkout from './components/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import BoardMember from './pages/BoardMember';
// import RendomForm from './components/RendomForm';
import {
  BrowserRouter as
  Router,
  Route,
  Routes
} from "react-router-dom";
import NewForm from './pages/NewForm';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <>
        <Router>
            <SpinnerComponent />
            <Header />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products/:id" element={<ProductDetail/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/board-member" element={<BoardMember/>}/>
              <Route path="/new-form" element={<NewForm/>}/>
            </Routes>
            <Footer/>
        </Router>
    </>
  );
}

export default App;