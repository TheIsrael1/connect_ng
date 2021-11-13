import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'
// import Modal from './components/Modal'
// import SellerTemplate from "./components/SellerTemplate";
import SellerListings from "./pages/SellerListing";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
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
    <Route path="/sellerlistings" element={<SellerListings />}>
    </Route>
    </Routes>
    </BrowserRouter>
    // <Modal />
    // <SellerTemplate />
    
  )}

export default App;
