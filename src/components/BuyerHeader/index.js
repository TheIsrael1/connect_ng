import React,{useState} from "react";
import style from "./buyerHeader.module.css";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";

const BuyerHeader = () => {

  const[open, setOpen] = useState(false);
  
  return (
    <header
      className={`${style.dashboardheader} flex items-center bg-gray-300 p-3 px-8 lg:px-36 flex-wrap`}
    >
      <div className={`flex `}>
      <Link to="/" className={`flex items-center gap-2`}>
        <img src={logo} alt='' />
        <h2 className={`font-bold text-xl`}>Buyer</h2>
      </Link>

      <Link to="/sellerdashboard">
      <div class="flex items-center justify-center mx-2 relative top-1">
        <input type="checkbox" name="toggle" class="hidden" />
        <label
          class="relative w-12 h-6 flex select-none cursor-pointer"
          for="toggle"
        >
          <span
            class="
              absolute
              left-0
              top-0
              h-full
              w-full
              bg-black
              rounded-full
              bg-black
            "
          ></span>
          <span
            class="
              h-6
              w-6
              border-2
              absolute
              z-10
              rounded-full
              bg-yellow-400
              transition-transform
              duration-300
              ease-in-out
              flex
              justify-center
              items-center
              border-black
            "
          ></span>
        </label>
      </div>
      </Link>
      </div>

      <nav className="ml-auto w-1/6 flex fl lg:w-auto flex-col">
      <button
        className="flex text-black inline-flex p-3 hover:bg-black-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        onClick={()=>{setOpen(!open)}}>
        <i className="font-semibold text-black-400">menu</i>
      </button>
       <div className={`${open ? style.open : style.dropdown } top-navbar w-full lg:inline-flex lg:flex-grow relative `}
        id="navigation">
        <ul className={`lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-auto lg:items-center items-start flex flex-col lg:h-auto absolute right-1 lg:right-0  bg-white lg:relative lg:bg-transparent`}>
          <li className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black-400 items-center justify-center hover:bg-black hover:text-white"
          ><Link to="/market">MarketPlace</Link></li>
          <li className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black-400 items-center justify-center hover:bg-black hover:text-white"
          ><Link to="/buyerbookings">Bookings</Link></li>
        </ul>
       </div>
        <div className={style.thumbnail}>
          <img src='' alt='' />
        </div>
      </nav>
      
    </header>
  );
}

export default BuyerHeader;