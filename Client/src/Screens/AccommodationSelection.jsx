// import React, { useState } from 'react';
// import { districtOptions, listingTypeOptions } from '../Components/options';
// import PlaceCard from '../Components/PlaceCard'; // Assuming you have a PlaceCard component
// //import GoogleMap from './GoogleMap'; // Assuming you have a GoogleMap component

// const AccommodationSelection = () => {
//   const [selectedDistrict, setSelectedDistrict] = useState('');
//   const [selectedListingType, setSelectedListingType] = useState('');
//   const [places, setPlaces] = useState([]); // Assuming places will be fetched from an API

//   // Function to handle search
//   const handleSearch = () => {
//     // Fetch places based on selectedDistrict and selectedListingType
//     // Update places state
//     // Example: fetchPlaces(selectedDistrict, selectedListingType).then(data => setPlaces(data));
//   };

//   return (
//     <div className="flex flex-row bg-cyan-50">
//       <div className="w-3/4 p-1 flex flex-col gap-1 bg-slate-500">
//         <h1 className="text-lg font-bold mb-4">Accommodation Selection</h1>
//         <h2 className="text-lg font-bold mb-4">
//           Selected District: {selectedDistrict}
//         </h2>
//         {/* Place cards */}
//         <div className="flex flex-wrap">
//           {places.map((place) => (
//             <PlaceCard key={place.id} place={place} />
//           ))}
//         </div>
//         {/* Wrap the divs in a flex container */}
//         <div className="flex flex-col sm:flex-row gap-1 bg-amber-400">
//           {/* District selection */}
//           <div className="mb-4 flex-1 bg-red-700">
//             <label className="block mb-1">District</label>
//             <select
//               className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               value={selectedDistrict}
//               onChange={(e) => setSelectedDistrict(e.target.value)}
//             >
//               <option value="">Select District</option>
//               {districtOptions.map((district) => (
//                 <option key={district} value={district}>
//                   {district}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Listing type selection */}
//           <div className="mb-4 flex-1 bg-lime-500">
//             <label className="block mb-1">Listing Type</label>
//             <select
//               className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               value={selectedListingType}
//               onChange={(e) => setSelectedListingType(e.target.value)}
//             >
//               <option value="">Select Listing Type</option>
//               {listingTypeOptions.map((type) => (
//                 <option key={type} value={type}>
//                   {type}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Search button */}
//           <div className="mb-4 flex-1 bg-stone-500">
//             <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Google Map */}
//       <div className="w-1/4 p-4 bg-orange-200">
//         {/* <GoogleMap district={selectedDistrict} /> */}
//       </div>
//     </div>
//   );
// };

// export default AccommodationSelection;

import React, { useState, useEffect } from 'react';
import { districtOptions, listingTypeOptions } from '../Components/options';
import axios from 'axios';
import GoogleMapView from '../Components/GoogleMapView';
import HotelCard from './../Components/HotelCard';

const AccommodationSelection = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedListingType, setSelectedListingType] = useState('');
  const [query, setQuery] = useState('srilanka+hotels+accomadations');
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    handleSearch();
  }, [selectedDistrict, selectedListingType]); 

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  // Function to handle search
  // const handleSearch = () => {

  //   // Fetch places based on selectedDistrict and selectedListingType
  //   // Update places state
  //   // Example: fetchPlaces(selectedDistrict, selectedListingType).then(data => setPlaces(data));
  // };

  const handleSearch = async (e) => {
    // e.preventDefault();

    setQuery(selectedDistrict + selectedListingType + '+Accomadations+hotels');
    try {
      const response = await axios.get('/api/places', {
        params: {
          query,
          //category: 'tourist_attraction',
          radius: 10000,
          lat: 7.8731,
          lng: 80.7718,
        },
      });
      setPlaces(response.data);
    } catch (error) {
      console.error('Error fetching places:', error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row bg-white">
      <div className="mt-10 w-full sm:w-3/5 p-1 flex flex-col gap-1 ">
        <h1 className="p-4 text-6xl font-extrabold mt-4  border-b-2 border-gray-200 text-gray-600">
          Choose your Best Accommodation
        </h1>
        <h2 className="p-4 text-left text-3xl font-extrabold mb-4  border-b-2 border-gray-200 ">
          Selected District: {selectedDistrict}
        </h2>

        {/* Wrap the divs in a flex container */}
        <div className="pl-10 flex flex-col sm:flex-row gap-1 ">
          {/* District selection */}
          <div className=" mb-4 flex-1 lg:w-4/9 ">
            <label className="  font-bold block mb-1 ">District</label>
            <select
              className=" block w-full h-1/2 shadow-inner bg-zinc-200 border-gray-300 rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">Select District</option>
              {districtOptions.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          {/* Listing type selection */}
          <div className="mb-4 flex-1 lg:w-4/9 ">
            <label className="font-bold block mb-1">Listing Type</label>
            <select
              className="block  w-full h-1/2  bg-zinc-200 border-gray-300 rounded-md shadow-inner focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={selectedListingType}
              onChange={(e) => setSelectedListingType(e.target.value)}
            >
              <option value="">Select Listing Type</option>
              {listingTypeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Search button */}
          <div className="mb-4 mt-5 pt-10 flex-0 lg:w-1/9 ">
            <button
              className="w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        {/* Place cards */}
        <div className="pl-10 place-list flex flex-wrap gap-10 ">
          {places.map((place, index) => (
            <HotelCard key={index} place={place} />
          ))}
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-20 w-full sm:w-2/5 p-4 fixed top-0 right-0 z-10">
        <h3 className="text-xl font-bold mb-4">Locations</h3>
        <GoogleMapView />
      </div>
    </div>
  );
};

export default AccommodationSelection;
