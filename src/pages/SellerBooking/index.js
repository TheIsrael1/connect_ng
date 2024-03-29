import React, {useEffect, useState} from "react";
import { dummy } from "../../utils/bookings";
import SellerHeader from "../../components/DashboardHeader";
import SellerBookingCard from "../../components/SellerBookingCard"
import axios from 'axios'

export default function SellerBookings() {

  const[bookings, setBookings] = useState([])
  const token = localStorage.getItem("token")
  const seller = localStorage.getItem("id")

  useEffect(()=>{
    axios
    .get(`https://connect-ng.herokuapp.com/api/user/${seller}/seller/bookings`,
      {headers: {"Authorization": `Token ${token}`}})
    .then(response => {
        const data = response.data
        console.log("data", data)
        setBookings(data)

    })
    .catch(error => {
      const data = error.response
      console.log("error",data.data.message)
    })
  },[])

  return (
    <>
    <SellerHeader />
    <div>
      <h2
        className={`text-center py-6 text-xl uppercase md:text-2xl font-bold`}
      >
        All bookings
      </h2>
      {bookings.map((bookings) => {
        return <SellerBookingCard bookings={bookings} dummy={dummy[0]} key={bookings.id} />;
      })}
    </div>
    </>
  );
}
