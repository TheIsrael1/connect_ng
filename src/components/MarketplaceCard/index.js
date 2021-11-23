import React, {useState} from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from './marketPlaceCard.module.css'
import axios from 'axios'



export default function MarketplaceCard(props) {
  const token = localStorage.getItem("token")

  
  const handlePost = () =>{
    axios
        .post(`https://connect-ng.herokuapp.com/api/services/${props.marketplace.id}/book`
        ,{},{headers: {"Authorization": `Token ${token}`}})
        .then(response => {
            const message = response.data
            console.log("message", message)
            props.successNotify(`you booked ${message.buyer} service`)
          
          
        })
        .catch(error => {
          const data = error.response.data
          console.log("error", data)
          props.errorNotify(data.message)
        })
  }
  const thumbnail = {
    background: `url(${props.dummy[0].image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "200px",
    borderRadius: "0.25rem 0.25rem 0 0",
  };
  let star = [];
  let rating = Number(props.marketplace.rating);

  for (let i = 1; i < rating; i++) {
    star.push(<AiFillStar className={`text-yellow-300`} />);
  }
  if (star.length < 5) {
    while (true) {
      if (star.length === 5) break;
      star.push(<AiFillStar className={`text-gray-300 font-24 text-2xl `} />);
    }
  }

  

  return (
    <>
        {/* {loading ? <Skeleton height={200} /> : */}
    <div className={`rounded bg-gray-200`}>
      <div className={`w-full`} style={thumbnail}></div>
      <div className={`flex py-6 px-4 `}>
        <div className={`mr-4`}>
          <img
            className={`w-12 h-12 rounded-full`}
            src={props.dummy[0].thumbnail}
            alt=''
          />
        </div>
        <div>
          <h3 className={`font-semibold text-xl capitalize`}>
            {props.marketplace.name}
          </h3>
          <p className={``}>{props.marketplace.description}</p>
          <div className={`flex items-center mt-2`}>{star}</div>
          <div className={`flex`}>
            <p className={`my-5 mr-10 font-semibold`}>
              Starting @ <span>&#8358;{props.marketplace.price}</span>
            </p>
            <button
              onClick={handlePost}
              className={`font-semibold py-2 px-6 rounded cursor-pointer my-2 ${styles.book}`}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* } */}
    </>
  );
}
