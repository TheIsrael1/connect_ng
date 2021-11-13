import style from "./dashboard.module.css";
import BuyerHeader from "../../components/BuyerHeader";
// import SellerListings from "../SellerListing";
import MarketPlace from "../MarketPlace";

export default function Dashboard() {
  return (
    <div className={style.dashboard}>
      <BuyerHeader />
      <main className={`mx-auto max-w-6xl px-4`}>
        <MarketPlace />
      </main>
    </div>
  );
}
