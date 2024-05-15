// import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from './../constants';
// const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY;

// const PlacesList = () => {
//   const category = 'tourist_attraction'; // Define the category for travel places
//   const radius = 1000; // Define the radius in meters
//   const lat = 7.8731; // Latitude of Sri Lanka
//   const lng = 80.7718; // Longitude of Sri Lanka
//   const BASE_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

//   const [places, setPlaces] = useState([]);
//   const [query, setQuery] = useState('');

//   //const url = `${BASE_URL}?query=${query}&category=${category}&radius=${radius}&location=${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`;
//   const handleChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(
//         `${BASE_URL}?query=${query}category=${category}&radius=${radius}&location=${lat},${lng}&key=AIzaSyA3upiukUN6BVejRSvw0ULJUTBtNMD5Wbk`
//       );
//       setPlaces(response.data.results);
//     } catch (error) {
//       console.error('Error fetching places:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={query} onChange={handleChange} />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {places.map((place, index) => (
//           <li key={index}>{place.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PlacesList;

import React, { useState } from 'react';
import axios from 'axios';
import PlaceCard from './PlaceCard';

const PlacesList = () => {
  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/places', {
        params: {
          query,
          //category: 'tourist_attraction',
          radius: 8000,
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
    <div className="pt-20 flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <div className="place-list flex flex-wrap gap-5">
        {places.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default PlacesList;
