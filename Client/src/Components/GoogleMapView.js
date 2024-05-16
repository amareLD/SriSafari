import { UserLocationContext } from '../Context/UserLocationContext';
//import { UserLocationContext } from '@/Context/UserLocationContext';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import React, { useContext } from 'react';
//import Markers from './Markers';
//import { SelectedBusinessContext } from '@/context/SelectedBusinessContext';

function GoogleMapView({ lat, lng }) {
  const cordinate = { lat, lng };
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const centerLocation = { lat: 7.8731, lng: 80.7718 };

  // const { selectedBusiness, setSelectedBusiness } = useContext(
  //   SelectedBusinessContext
  // );
  // const [map, setMap] = useState();

  const containerStyle = {
    width: '100%',
    height: '500px',
  };

  // useEffect(() => {
  //   if (state === 'places') {
  //     setCenter(cordinate);
  //   } else {
  //     setCenter(userLocation);
  //   }
  // }, [state, cordinate, userLocation]);

  console.log(cordinate);
  return (
    <div className="rounded-lg shadow-2xl p-4">
      <LoadScript
        googleMapsApiKey={'AIzaSyBfN0CXp59MUkkj4gYAGqUlNLEtCH3cPCw'}
        // mapIds={['327f00d9bd231a33']}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          // center={userLocation}

          center={centerLocation}
          //options={{ mapId: '327f00d9bd231a33' }}
          zoom={7.5}
          //onLoad={(map) => setMap(map)}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: '/user-location.png',
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
          <MarkerF
            position={cordinate}
            icon={{
              url: '/user-location.png',
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
          {/* {businessList.map(
            (item, index) =>
              index <= 7 && <Markers business={item} key={index} />
          )} */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
