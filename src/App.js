import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'
import Modal from './components/Modal'
import SellerTemplate from "./components/SellerTemplate";

import './App.css';

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    // <Route path="/" element={<Home />}>
    // </Route>
    // <Route path="/about" element={<About />}>
    // </Route>
    // </Routes>
    // </BrowserRouter>
    // <Modal />
    <SellerTemplate />

  );
}

export default App;
