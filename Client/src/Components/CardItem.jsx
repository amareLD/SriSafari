import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Cards.css';
import CardItem from './CardItem';

function Cards() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(
          'https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
            params: {
              location: 'YOUR_LATITUDE,YOUR_LONGITUDE', 
              radius: 5000, 
              type: 'tourist_attraction', 
              key: 'YOUR_API_KEY', 
            }
          }
        );
        setPlaces(response.data.results);
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <div className='cards'>
      <h1>Most Popular Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {places.map((place, index) => (
              <CardItem
                key={index}
                src={place.photos && place.photos[0].getUrl()}
                text={place.name}
                label='Adventure' 
                path='/services'
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
