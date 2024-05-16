import React, { useEffect, useState } from 'react';
import PlaceCard from './PlaceCard';
import HotelCard from './HotelCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Recommend() {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedAttractionType, setSelectedAttractionType] = useState('');
  //const [query, setQuery] = useState('sri lanka+attractions');
  //const [queryBeaches, setQueryBeaches] = useState('sri lanka+attractions');

  const [places, setPlaces] = useState([]);
  const [beaches, setBeaches] = useState([]);
  const [resturents, setResturents] = useState([]);
  useEffect(() => {
    Waterfalls();
    BestBeaches();
    Resturents();
  }, [selectedDistrict, selectedAttractionType]);

  const Waterfalls = async (e) => {
    //e.preventDefault();
    // setQuery('Best Water falls+srilanka');
    try {
      const response = await axios.get('/api/places', {
        params: {
          query: 'Best Water falls+srilanka',
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

  //Beachs cards shows here
  const BestBeaches = async (e) => {
    // e.preventDefault();

    // setQueryBeaches('Best Water falls+srilanka');
    try {
      const response = await axios.get('/api/places', {
        params: {
          query: 'Sri Lanka Best Beachs',
          //category: 'tourist_attraction',
          radius: 10000,
          lat: 7.8731,
          lng: 80.7718,
        },
      });
      setBeaches(response.data);
    } catch (error) {
      console.error('Error fetching places:', error);
    }
  };

  //Resturents cards shows
  const Resturents = async (e) => {
    // e.preventDefault();

    // setQueryBeaches('Best Water falls+srilanka');
    try {
      const response = await axios.get('/api/places', {
        params: {
          query: 'Sri Lanka Best Resturents',
          //category: 'tourist_attraction',
          radius: 10000,
          lat: 7.8731,
          lng: 80.7718,
        },
      });
      setResturents(response.data);
    } catch (error) {
      console.error('Error fetching places:', error);
    }
  };

  return (
    <div className="title py-10">
      <h2 className="text-7xl font-bold">Recommended Destinations</h2>
      <div className="pb-5 bg-white items-center flex flex-col  ">
        <h2 className="text-left font-bold text-4xl pt-5 px-5">
          Beautyfull Water Falls in Sri Lanka
        </h2>
        <div className="px-5 py-5 place-list flex flex-raw gap-4 items-center">
          {places.slice(0, 4).map((place, index) => (
            <PlaceCard key={index} place={place} />
          ))}
        </div>
        <div className="items-center  mb-2 mt-2 pt-2 lg:w-1/9 ">
          <Link
            to="/place-selection"
            className="btn border-t-2 border-l-2 border-b-8 border-r-4 hover:border-2   border-black duration-200 w-60 h-10 text-center pl-20 py-4 rounded-sm bg-yellow-500  text-white  font-semibold    items-center hover:bg-yellow-600 hover:text-gray-100 flex flex-raw"
          >
            visit more
          </Link>
        </div>
        <hr className="shadow-lg mt-10 h-0.5 w-4/5 bg-yellow-200 rounded-sm " />
      </div>

      <div className="pb-5 bg-white items-center flex flex-col  ">
        <h2 className="text-left font-bold text-4xl pt-5 px-5">
          Best Beaches in Sri Lanka
        </h2>
        <div className="px-5 py-5 place-list flex flex-raw gap-4 items-center">
          {beaches.slice(0, 4).map((place, index) => (
            <PlaceCard key={index} place={place} />
          ))}
        </div>
        <div className="items-center  mb-2 mt-2 pt-2 lg:w-1/9 ">
          <Link
            to="/place-selection"
            className="btn border-t-2 border-l-2 border-b-8 border-r-4 hover:border-2   border-black duration-200 w-60 h-10 text-center pl-20 py-4 rounded-sm bg-yellow-500  text-white  font-semibold    items-center hover:bg-yellow-600 hover:text-gray-100 flex flex-raw"
          >
            visit more
          </Link>
        </div>
        <hr className="shadow-lg mt-10 h-0.5 w-4/5 bg-yellow-200 rounded-sm " />

        <div className="pb-5 bg-white items-center flex flex-col  ">
          <h2 className="text-left font-bold text-4xl pt-5 px-5">
            Best Resturents in Sri Lanka
          </h2>
          <div className="px-5 py-5 place-list flex flex-raw gap-20 items-center">
            {resturents.slice(0, 3).map((place, index) => (
              <HotelCard key={index} place={place} />
            ))}
          </div>
          <div className="items-center  mb-2 mt-2 pt-2 lg:w-1/9 ">
            <Link
              to="/place-selection"
              className="btn border-t-2 border-l-2 border-b-8 border-r-4 hover:border-2   border-black duration-200 w-60 h-10 text-center pl-20 py-4 rounded-sm bg-yellow-500  text-white  font-semibold    items-center hover:bg-yellow-600 hover:text-gray-100 flex flex-raw"
            >
              visit more
            </Link>
          </div>
          <hr className="shadow-lg mt-10 h-0.5 w-4/5 bg-yellow-200 rounded-sm " />
        </div>
      </div>
    </div>
  );
}
