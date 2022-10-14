import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import * as esri from 'esri-leaflet-geocoder';
import LeafletSearchField from './LeafletSearchField.jsx';
import DraggableMarker from './DraggableMarker.jsx';
import axios from 'axios';

const LeafletMap = () => {
  const [location, setLocation] = useState(null);
  const [stores, setStores] = useState([]);
  const userIcon = icon({ iconUrl: '/chefs-hat.svg', iconSize: [30, 30] });
  const cartIcon = icon({
    iconUrl: '/images/shoppingCart.png',
    iconSize: [30, 30],
  });
  const [searchLocation, setSearchLocation] = useState(null);
  const [searched, setSearched] = useState(false);
  const [markerLocation, setMarkerLocation] = useState(null);
  const [dragged, setDragged] = useState(false);
  let mapRef = useRef();

  //REMINDER: REMOVE KEY FROM INDEX HTML IN GOOGLE SCRIPT
  // const service = new google.maps.places.PlacesService(MapContainer);
  // service.nearbySearch(
  //   {
  //     location: location,
  //     radius: 500,
  //     type: ['grocery'],
  //   },
  //   function (results, status) {
  //     console.log(results);
  //   }
  // );

  async function showGroceryStores(latLng) {
    const esriKey = process.env.ESRI_KEY;
    // returning some results that are not grocery stores, but are tagged as grocery
    // possible workaround: at least for us, could try to compile a list of major national/regional grocery stores
    // might be tedious though; but that way, could at least filter through results and only inclue results that somewhat make sense
    let obj = new esri.Geocode({
      apikey: esriKey,
    })
      .category('grocery')
      .nearby(latLng, 10)
      .run((error, results, response) => {
        if (error) return;
        setStores(results.results);
      });
  }

  //this function gets back the coordinates from the draggable marker component
  function getDraggedMarkerLocation(data) {
    setMarkerLocation(data);
    setDragged(!dragged);
  }

  //run whenever the marker is dragged
  useEffect(() => {
    if (markerLocation) {
      setLocation(markerLocation);
      showGroceryStores(markerLocation);
    }
  }, [dragged]);

  //function that is passed to LeafletSearchField to get back coordinates
  function getLocation(data) {
    setSearchLocation(data);
    setSearched(!searched);
  }

  //whenever searched state changes (whenever the getLocation function runs, set the location)
  useEffect(() => {
    if (searchLocation) {
      setLocation(searchLocation);
      showGroceryStores(searchLocation);
    }
  }, [searched]);

  // -- can find user location if they opt in to location services;
  // -- defaulting to san fran if users opt out
  // -- should look into how to find location by zipcode/address if possible
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latLng = [position.coords.latitude, position.coords.longitude];
          setLocation(latLng);
          showGroceryStores(latLng);
          nearbySearch(latLng);
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
      <MapContainer
        ref={mapRef}
        id="map"
        center={location}
        zoom={13}
        scrollWheelZoom={true}
      >
        {<LeafletSearchField setLocation={getLocation} />}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker
          icon={userIcon}
          position={location}
          setMarkerLocation={getDraggedMarkerLocation}
          searched={searched}
        ></DraggableMarker>
        {stores.map((store, idx) => {
          return (
            <Marker key={idx} position={store.latlng} icon={cartIcon}>
              <Popup className="popup">
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
