import React, { useState } from "react";
import MarketplaceCard from "../../components/MarketplaceCard";
import Searchbox from "../../components/Searchbox";
import { marketplace } from "../../utils/marketplace";

export default function MarketPlace() {
  const [filtereditem, setitem] = useState("");

  const onInputChange = (e) => setitem(e.target.value);

  const filterCategories = marketplace.filter((item) => {
    return item.category.toLowerCase().includes(filtereditem.toLowerCase())
      ? item
      : null;
  });

  return (
    <div className={`mt-6`}>
      <Searchbox searchitem={onInputChange} />
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 my-4`}>
        {filterCategories.map((items) => {
          return <MarketplaceCard marketplace={items} key={items.id} />;
        })}
      </div>
    </div>
  );
}
