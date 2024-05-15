import React from 'react';
import '../Styles/globals.css';
import { Link } from 'react-router-dom';

const HotelCard = ({ place }) => {

  const photoReference =
    place?.photos?.length > 0 ? place.photos[0].photo_reference : '';

  return (
    <div className="place-card relative w-[360px] p-0 rounded-lg shadow-md mb-1 bg-white hover:scale-105 transition-all mt-[20px] cursor-pointer flex flex-col items-center">
      <Link
        to={`/hotel-description/${place.place_id}?name=${place.name}&address=${
          place.formatted_address
        }&rating=${place.rating}&opening_hour=${
          place.opening_hours ? place.opening_hours.open_now : 'Not available'
        }&lat=${place.geometry.location.lat}&lng=${
          place.geometry.location.lng
        }&image=${encodeURIComponent(
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyA3upiukUN6BVejRSvw0ULJUTBtNMD5Wbk`
        )}`}
      >
        {photoReference && (
          <img
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyA3upiukUN6BVejRSvw0ULJUTBtNMD5Wbk`}
            alt={place.name}
            className=" p-1 rounded-lg object-cover shadow-md hover:shadow-lg transition duration-300 w-full h-64"
          />
        )}

        <button className="absolute top-0 right-0 p-1 bg-transparent  text-gray-100 font-semibold hover:text-cyan-400 text-6xl py-0.5 px-5  border-blue-500 hover:border-transparent rounded-full w-auto h-auto shadow-3xl  hover:scale-110 transition-all">
          <span className=" shadow-3xl">+</span>
        </button>

        <h2 className="text-left text-[18px] font-bold mt-1 ml-2">
          {place.name}
        </h2>
        <h2 className="text-left mr-2 ml-2 text-[15px] text-gray-400 line-clamp-2">
          {place.formatted_address}
        </h2>
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.02l2.3 7.09h7.45l-6.04 4.39 2.3 7.08L12 15.37l-5.01 3.12 2.3-7.08L2.25 8.11h7.45L12 1.02z"
            />
          </svg>
          <h2 className="text-[13px] font-bold text-left">{place.rating}</h2>
        </div>
      </Link>
    </div>
  );
};

export default HotelCard;
