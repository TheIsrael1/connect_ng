export default function ListingCard(props) {
  const imagestyle = {
    background: `url('${props.listing.image}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "200px",
  };
  return (
    <div className={`flex h-auto bg-gray-300 rounded my-3`}>
      <div className={`w-64`} style={imagestyle}></div>
      <div className={`px-4 py-4 w-full`}>
        <h2 className={`font-bold text-lg md:text-xl`}>{props.listing.text}</h2>
        <div className={`flex items-center my-3`}>
          <p className={`bg-yellow-300 p-2 font-semibold`}>Starting @</p>
          <p className={`p-2 bg-black text-white`}>
            &#8358;{props.listing.price}
          </p>
        </div>
        {props.listing.author && (
          <div className={`flex justify-between items-center`}>
            <div>
              <p className={`text-gray-500 py-2`}>{props.listing.author}</p>
            </div>
            <div>
              {props.listing.status &&
              typeof props.listing.status === "string" ? (
                <button
                  className={`font-semibold ${
                    props.listing.status === "accept"
                      ? "bg-yellow-300"
                      : "bg-gray-500"
                  } py-2 px-6 cursor-pointer text-white`}
                >
                  {props.listing.status}
                </button>
              ) : (
                <p>Payment made, click here when service is completed!</p>
              )}
            </div>
          </div>
        )}
        {props.listing.date && (
          <div>
            <p className={`text-right text-gray-500 py-4`}>
              {props.listing.date}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
