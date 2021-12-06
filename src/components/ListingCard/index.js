import { useEffect, useState } from 'react';
import styles from './listingcard.module.css'
import placeholder from "../../assets/image/placeholder_listing.png";

export default function ListingCard(props) {

  const[date, setDate] = useState("")
  const imagestyle = {
    background: `url('${placeholder}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "200px",
  };

  useEffect(()=>{
      const da = props.listing.created_at;
      const dat= da.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/i)
      setDate(dat)
      console.log("date",dat)
    
  },[])
  return (
    <div className={`flex h-auto bg-gray-300 rounded my-3 lg mx-2 lg:mx-40`}>
      <div className={`w-64 `} style={imagestyle}></div>
      <div className={`lg:px-4 px-1 lg:py-4 py-2 w-full`}>
        <h2 className={`font-bold text-lg md:text-xl`}>{props.listing.description}</h2>
        <div className={`flex items-center my-3`}>
          <p className={`bg-yellow-300 p-2 lg:px-2 lg:py-2 px-1 py-2 font-semibold ${styles.starting}`}>Starting @</p>
          <p className={`p-2 bg-black text-white ${styles.price}`}>
            &#8358;{props.listing.price}
          </p>
        </div>
        {props.listing.created_at && (
          <div>
            <p className={`lg:text-right text-left text-sm lg:text-gray-500 lg:py-4 py-0`}>
              posted on {date}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
