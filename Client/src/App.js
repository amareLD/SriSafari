import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import LogIn from './Screens/LogIn.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlacesList from './Components/PlacesList.js';
import Cards from './Screens/Cards.jsx';
import AccommodationSelection from './Screens/AccommodationSelection.jsx';
import HotelDescription from './Screens/HotelDescription.jsx';
import PlacesDescription from './Screens/PlacesDescription.jsx';
import { UserLocationContext } from './Context/UserLocationContext.js';
import { useEffect, useState } from 'react';
import PlacesSelection from './Screens/PlacesSelection.jsx';
import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx';
import HomeScreen from './Screens/HomeScreen.jsx';
import HotelForm from './Screens/HotelForm';

function App() {
  const [userLocation, setUserLocation] = useState([]);
  //const [selectedBusiness,setSelectedBusiness]=useState([]);
  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };
  return (
    <Provider store={store}>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/google-place" element={<PlacesList />} />
            <Route path="/hotel-form" element={<HotelForm />} />
            <Route path="/placecards" element={<Cards />} />
            <Route path="/acc-selection" element={<AccommodationSelection />} />
            <Route path="/place-selection" element={<PlacesSelection />} />
            <Route
              path="/hotel-description/:id"
              element={<HotelDescription />}
            />
            <Route
              path="/place-description/:id"
              element={<PlacesDescription />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
        <ToastContainer />
      </UserLocationContext.Provider>
    </Provider>
  );
}

export default App;
