import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Component/Navbar';
import Home from './Component/Home';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
// import Forgot from './Component/Forgot';
import ContactUs from './Component/ContactUs';
import AboutUs, { About } from './Component/AboutUs';
// import ProductCard from './Component/ProductCard';
import Cart from './Component/Cart';
import CheckoutForm from './Component/Checkout';
import ProductsList from './Component/Product/ProductsList';
// import ProductPage from './Component/Product/ProductPage';
import RentalForm from './Component/Rental/RentalForm';
import Dashboard from './Component/Admin/Dashboard';
import RentalList from './Component/Admin/RentalList';
import AddEquipmentForm from './Component/Owner/AddEquipmentForm';


function App() {  
  return (
    <>
      <Router>
       
      <Navbar/>
        <Routes>
   
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          {/* <Route path="/forgot" element={<Forgot/>}/> */}
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="about" element={<AboutUs/>} />
          

          {/* <Route path="productcard" element={<ProductCard/>} /> */}
          <Route path="cart" element={<Cart/>} />
          <Route path="checkout" element={<CheckoutForm/>} />
          <Route path="/rental" element={<RentalForm/>} />
          <Route exact path="/productlist" element={<ProductsList/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/rentallist" element={<RentalList></RentalList>} />
          <Route path="/addequipment" element={<AddEquipmentForm></AddEquipmentForm>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
