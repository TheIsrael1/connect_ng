import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'
// import Modal from './components/Modal'
// import SellerTemplate from "./components/SellerTemplate";
import SellerListings from "./pages/SellerListing";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import SellerTemplate from "./components/SellerTemplate";
import BuyerBookings from "./pages/BuyerBookings";
import SellerBookings from "./pages/SellerBooking";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}>
    </Route>
    <Route path="/about" element={<About />}>
    </Route>
    <Route path="/about" element={<About />}>
    </Route>
    <Route path="/market" element={<BuyerDashboard />}>
    </Route>
    <Route path="/sellerdashboard" element={<SellerDashboard />}>
    </Route>
    <Route path="/listingflow" element={<SellerTemplate />}>
    </Route>
    <Route path="/sellerlistings" element={<SellerListings />}>
    </Route>
    <Route path="/buyerbookings" element={<BuyerBookings />}>
    </Route>
    <Route path="/sellerbookings" element={<SellerBookings />}>
    </Route>
    </Routes>
    </BrowserRouter>
    // <Modal />
    // <SellerTemplate />
    
  )}

export default App;
