import style from "./dashboard.module.css";
import DashboardHeader from "../../components/DashboardHeader";
// import SellerListings from "../SellerListing";
import MarketPlace from "../MarketPlace";

export default function Dashboard() {
  return (
    <div className={style.dashboard}>
      <DashboardHeader />
      <main className={`mx-auto max-w-6xl px-4`}>
        <MarketPlace />
      </main>
    </div>
  );
}
