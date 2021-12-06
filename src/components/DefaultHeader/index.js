import React,{useState} from "react";
import style from "./defaultHeader.module.css";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";

const DefaultHeader = () => {

  const[open, setOpen] = useState(false);
  
  return (
    <header
      className={`${style.dashboardheader} flex items-center bg-gray-300 p-3 px-8 lg:px-40 flex-wrap`}
    >
      <Link to="/" className={`flex items-center gap-2`}>
        <img src={logo} alt='' />
        {/* <h2 className={`font-bold text-xl`}>Seller</h2> */}
      </Link>
      <nav className="ml-auto w-1/6 flex fl lg:w-auto flex-col">
      <button
        className="flex text-black inline-flex p-3 hover:bg-black-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        onClick={()=>{setOpen(!open)}}>
        <i className="material-icons font-semibold text-black-400">menu</i>
      </button>
       <div className={`${open ? style.open : style.dropdown } top-navbar w-full lg:inline-flex lg:flex-grow relative `}
        id="navigation">
       <ul className={`lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-auto lg:items-center items-start flex flex-col lg:h-auto absolute right-1 lg:right-0 bg-white lg:relative lg:bg-transparent`}>
          <li className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black-400 items-center justify-center hover:bg-black hover:text-white"
          ><Link to="/">Home</Link></li>
          <li className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black-400 items-center justify-center hover:bg-black hover:text-white"
          ><Link to="/about">About</Link></li>
          <li className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black-400 items-center justify-center hover:bg-black hover:text-white"
          ><Link to="/">ContactUs</Link></li>
        </ul>
       </div>
        <div className={style.thumbnail}>
          <img src='' alt='' />
        </div>
      </nav>
      
    </header>
  );
}

export default DefaultHeader;