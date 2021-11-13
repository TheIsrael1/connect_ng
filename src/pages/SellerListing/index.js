import React from "react";
import { listings } from "../../utils/listings";
import DashboardHeader from "../../components/DashboardHeader";
import ListingCard from "../../components/ListingCard";


export default function SellerListings() {
  return (
    <>
    <DashboardHeader />
    <div>
      <h2
        className={`text-center py-6 text-xl uppercase md:text-2xl font-bold`}
      >
        All listings
      </h2>
      {listings.map((listing) => {
        return <ListingCard listing={listing} key={listing.id} />;
      })}
    </div>
    </>
  );
}
