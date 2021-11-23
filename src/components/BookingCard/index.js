import React from 'react'
import styles from './booking.module.css'
import axios from 'axios'

const BookingCard = (props) => {

    const token = localStorage.getItem("token")
    const buyer = localStorage.getItem("id")

    const handleDeleteBooking = ()=>{
        axios
        .delete(`https://connect-ng.herokuapp.com/api/user/${buyer}/buyer/bookings/${props.bookings.id}`,
            {headers: {"Authorization": `Token ${token}`}})
        .then(response => {
            const data = response
            console.log("data", response)
            window.location.reload()
            
        })
        .catch(error => {
            const data = error.response
            console.log("error",data.data.message)
        })
        }

    const imagestyle = {
        background: `url('${props.dummy.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "200px",
    };
  return (
    <div className={`flex h-auto bg-gray-300 rounded my-3 mx-32`}>
      <div className={`w-64`} style={imagestyle}></div>
      <div className={`px-4 py-4 w-full`}>
        <h2 className={`font-bold text-lg md:text-xl`}>{props.bookings.service}</h2>
        <div className={`flex items-center my-3`}>
          <p className={`bg-yellow-300 p-2 font-semibold ${styles.starting}`}>Starting @</p>
          <p className={`p-2 bg-black text-white ${styles.price}`}>
            &#8358;{props.bookings.price}
          </p>
        </div>
          <div className={`flex justify-between items-center`}>
            <div>
              { props.bookings.pending && <p className={`bg-gray-400 px-2 text-white rounded py-2`}>pending</p>}
              { props.bookings.accepted && <p className={`bg-gray-400 px-2 text-white rounded py-2`}>accepted</p>}            </div>
            <div>
              {props.bookings.pending &&
                <button
                  className={`font-semibold py-2 bg-red-500 px-6 cursor-pointer text-white`}
                  onClick={handleDeleteBooking}
                  >
                  CANCEL
                </button>}
                {props.bookings.accepted &&
                <button
                  className={`font-semibold py-2 px-6 bg-green-500 cursor-pointer text-white`} >
                  MAKE PAYMENT
                </button>}
            </div>
          </div>
        {/* {props.bookings.date && (
          <div>
            <p className={`text-right text-gray-500 py-4`}>
              {props.bookings.date}
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default BookingCard