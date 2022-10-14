import React from 'react';
import { useLoadScript } from '@react-google-maps/api';
import Map from './Map.jsx';
const libraries = ['places'];
const MapMain = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries,
  });
  return <div>{isLoaded ? <Map /> : <h1>Loading...</h1>}</div>;
};

export default MapMain;
