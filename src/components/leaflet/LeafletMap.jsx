import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import * as esri from 'esri-leaflet-geocoder';
// will refactor and move axios call to store
import axios from 'axios';
import LeafletSearchField from './LeafletSearchField.jsx';
import DraggableMarker from './DraggableMarker.jsx';

const LeafletMap = () => {
  const [location, setLocation] = useState(null);
  const [stores, setStores] = useState([]);
  const userIcon = icon({ iconUrl: '/chefs-hat.svg', iconSize: [30, 30] });
  const [searchLocation, setSearchLocation] = useState(null);
  const [searched, setSearched] = useState(false);

  async function showGroceryStores(latLng) {
    const { data: esriKey } = await axios.get('/api/esri/key');
    // returning some results that are not grocery stores, but are tagged as grocery
    // possible workaround: at least for us, could try to compile a list of major national/regional grocery stores
    // might be tedious though; but that way, could at least filter through results and only inclue results that somewhat make sense
    let obj = new esri.Geocode({
      apikey: esriKey,
    })
      .category('Grocery')
      .nearby(latLng, 10)
      .run((error, results, response) => {
        if (error) return;
        setStores(results.results);
      });
  }

  //function that is passed to LeafletSearchField to get back coordinates
  function getLocation(data) {
    setSearchLocation(data);
    setSearched(!searched);
  }

  React.useEffect(() => {
    if (searchLocation) {
      setLocation(searchLocation);
      showGroceryStores(searchLocation);
    }
  }, [searched]);

  // -- can find user location if they opt in to location services;
  // -- defaulting to san fran if users opt out
  // -- should look into how to find location by zipcode/address if possible

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latLng = [position.coords.latitude, position.coords.longitude];
          setLocation(latLng);
          showGroceryStores(latLng);
        },
        () => {
          const sanFranLatLng = [37.7749, -122.4194];
          setLocation(sanFranLatLng);
          showGroceryStores(sanFranLatLng);
        }
      );
    }
  }, []);

  return location ? (
    <div>
      <MapContainer id="map" center={location} zoom={13} scrollWheelZoom={true}>
        {<LeafletSearchField func={getLocation} />}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={userIcon} position={location} draggable={true}>
          <Popup>You are here.</Popup>
        </Marker>
        {stores.map((store, idx) => {
          return (
            <Marker key={idx} position={store.latlng}>
              <Popup>
                {store.text} <br /> {store.properties.Place_addr}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  ) : (
    <></>
  );
};

export default LeafletMap;
