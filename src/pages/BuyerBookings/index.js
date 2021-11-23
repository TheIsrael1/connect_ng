import React, {useEffect, useState} from "react";
import  {dummy}  from "../../utils/bookings";
import BuyerHeader from "../../components/BuyerHeader";
import BookingCard from "../../components/BookingCard";
import axios from 'axios'

export default function BuyerBookings() {

  const[bookings, setBookings] = useState([])
  const token = localStorage.getItem("token")
  const buyer = localStorage.getItem("id")

  useEffect(()=>{
    axios
    .get(`https://connect-ng.herokuapp.com/api/user/${buyer}/buyer/bookings`,
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
    <BuyerHeader />
    <div>
      <h2
        className={`text-center py-6 text-xl uppercase md:text-2xl font-bold`}
      >
        All bookings
      </h2>
      {bookings.map((bookings) => {
        return <BookingCard bookings={bookings} dummy={dummy[0]} key={bookings.id} />;
      })}
    </div>
    </>
  );
}
