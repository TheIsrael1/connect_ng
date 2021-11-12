import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function MarketplaceCard(props) {
  const thumbnail = {
    background: `url(${props.marketplace.image})`,
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
      star.push(<AiFillStar className={`text-gray-300`} />);
    }
  }
  return (
    <div className={`rounded bg-gray-200`}>
      <div className={`w-full`} style={thumbnail}></div>
      <div className={`flex py-6 px-4 `}>
        <div className={`mr-4`}>
          <img
            className={`w-12 h-12 rounded-full`}
            src={props.marketplace.thumbnail}
            alt=''
          />
        </div>
        <div>
          <h3 className={`font-semibold text-xl capitalize`}>
            {props.marketplace.author}
          </h3>
          <p className={``}>{props.marketplace.text}</p>
          <div className={`flex items-center mt-2`}>{star}</div>
          <div>
            <p className={`my-2 font-semibold`}>
              Starting @ <span>&#8358;{props.marketplace.price}</span>
            </p>
            <button
              className={`font-semibold bg-yellow-300 py-2 px-6 cursor-pointer my-2`}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
