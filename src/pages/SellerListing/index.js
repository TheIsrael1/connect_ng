import React,{useState, useEffect} from "react";
// import { listings } from "../../utils/listings";
import DashboardHeader from "../../components/DashboardHeader";
import ListingCard from "../../components/ListingCard";
import axios from 'axios'
// import Loader from "../../components/loader";
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

export default function SellerListings() {

  const[listings, setListings] = useState([])
  const token = localStorage.getItem("token")
  const seller = localStorage.getItem("id")
  // const[loading, setLoading] = useState(true)

  useEffect(()=>{
    axios
    .get(`https://connect-ng.herokuapp.com/api/user/${seller}/services`,
      {headers: {"Authorization": `Token ${token}`}})
    .then(response => {
        const data = response.data
        console.log("data", data)
        setListings(data)
        setTimeout(() => {
          
          // setLoading(false)
        }, 1000)

    })
    .catch(error => {
      const data = error.response
      console.log("error",data.data.message)
    })
  },[])


  return( 
    // loading ? <Loader /> :
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
  )
  
}
