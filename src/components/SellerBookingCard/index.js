import React from 'react';
import styles from './booking.module.css'
import axios from 'axios'



const BookingCard = (props)=>{

    const token = localStorage.getItem("token")
    const seller = localStorage.getItem("id")

    const handleAccept =()=>{
    axios
    .put(`https://connect-ng.herokuapp.com/api/user/${seller}/seller/bookings/${props.bookings.id}`,
      {accepted : "true", pending : "false"},
      {headers: {"Authorization": `Token ${token}`}})
    .then(response => {
        const data = response.data
        console.log("data", data)
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
    // minWidth: "100px"
  };
  return (
    <div className={`flex h-auto bg-gray-300 rounded my-3 lg mx-2 lg:mx-40`}>
      <div className={`w-64 min-w-fit`} style={imagestyle}></div>
      <div className={`lg:px-4 px-1 lg:py-4 py-2 w-3/4`}>
        <h2 className={`font-bold text-lg md:text-xl`}>{props.bookings.service}</h2>
        <div className={`flex items-center my-3`}>
          <p className={`bg-yellow-300 p-2 lg:px-2 lg:py-2 px-1 py-2 font-semibold ${styles.starting}`}>Starting @</p>
          <p className={`p-2 bg-black text-white ${styles.price}`}>
            &#8358;{props.bookings.price}
          </p>
        </div>
          <div className={`flex justify-between items-center`}>
            <div>
            <p className={`lg:text-right text-left text-sm lg:text-gray-500 lg:py-4 py-0 break-words lg:w-full w-28 max-w-fit`}>booked by {props.bookings.buyer}</p>
            </div>
            <div>
              {props.bookings.pending &&
                <button
                  className={`font-semibold py-2 lg:px-6 px-2 cursor-pointer lg:text-base text-xs text-black mx-2 ${styles.accept}`}
                  onClick={handleAccept}
                  >
                  ACCEPT
                </button>}
                {
                props.bookings.accepted &&
                <button
                  className={`font-semibold py-2 lg:px-6 px-2 bg-gray-200 lg:text-base text-xs rounded text-black mx-2`} >
                  WAITING FOR PAYMENT
                </button>}
                {
                props.bookings.paid &&
                <p
                  className={`py-2 px-6 text-black`} >
                  Payment made. Click <span className={`${styles.paymentConfirm}`}> here </span>  when service is completed
                </p>} 
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