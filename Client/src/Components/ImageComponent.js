import React from 'react';

function ImageComponent(place) {
  const photoReference =
    place?.photos?.length > 0 ? place.photos[0].photo_reference : '';

  return (
    <div className='bg-gray-800 h-10'>
    {photoReference && (
        <img
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyBfN0CXp59MUkkj4gYAGqUlNLEtCH3cPCw`}
          alt={place.name}
          className="rounded-lg object-cover shadow-md hover:shadow-lg transition duration-300 w-full h-64"
        />
      )}
    </div>
  );
}

export default ImageComponent;
