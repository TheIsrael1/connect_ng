import style from "./defaultHeader.module.css";
import logo from "../../assets/image/logo.png";

export default function DefaultHeader() {
  return (
    <header
      className={`${style.dashboardheader} flex justify-between px-40 py-6 bg-gray-300`}
    >
      <div className={`flex items-center gap-2`}>
        <img src={logo} alt='' />
        <h2 className={`font-bold text-xl`}>Seller</h2>
      </div>
      <nav>
        <ul className={`flex justify-between items-center gap-6`}>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <div className={style.thumbnail}>
          <img src='' alt='' />
        </div>
      </nav>
    </header>
  );
}