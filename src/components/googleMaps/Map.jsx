import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import PlaceAutoComplete from './PlaceAutocomplete.jsx';

const Map = () => {
  const [location, setLocation] = useState(null);
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [userClicked, setUserClicked] = useState(false);
  const [searchLocation, setSearchLocation] = useState(null);
  const [searched, setSearched] = useState(false);

  const mapRef = useRef();
  //refer to map instance as "mapRef.current"
  const onMapLoad = useCallback((map) => (mapRef.current = map), []);

  function onMarkerDragEnd(event) {
    const latlng = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    setLocation(latlng);
    setNearbyStores(latlng);
  }

  const options = useMemo(
    () => ({
      mapId: '7fb386391a2ca376',
      clickableIcons: false,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP,
      },
    }),
    []
  );

  function setNearbyStores(location) {
    const request = {
      location: location,
      type: ['grocery_or_supermarket'],
      rankBy: google.maps.places.RankBy.DISTANCE,
    };

    let service = new google.maps.places.PlacesService(mapRef.current);
    service.nearbySearch(request, callback);

    function callback(results, status, pagination) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        setStores(results);
      }
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(latLng);
          setNearbyStores(latLng);
        },
        () => {
          const sanFranLatLng = { lat: 37.7749, lng: -122.4194 };
          setLocation(sanFranLatLng);
          setNearbyStores(sanFranLatLng);
        }
      );
    }
  }, []);

  //function used in placesAutocomplete component to pass back the location searched
  function getSearchLocation(data) {
    setSearchLocation(data);
    setSearched(!searched);
  }

  //setting the map's new location based off the search location passed from placesAutocomplete
  useEffect(() => {
    if (searchLocation) {
      setLocation(searchLocation);
      setNearbyStores(searchLocation);
    }
  }, [searched]);

  return (
    <div className="container">
      <div className="map">
        <GoogleMap
          mapContainerClassName="map-container"
          zoom={15}
          center={location && location}
          options={options}
          onLoad={(map) => onMapLoad(map)}
        >
          <PlaceAutoComplete setSearchLocation={getSearchLocation} />
          <Marker
            position={location && location}
            onClick={() => setUserClicked(true)}
            draggable={true}
            icon={{
              url: '/chefs-hat.svg',
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            onDragEnd={onMarkerDragEnd}
          />
          {userClicked ? (
            <InfoWindow
              options={{ pixelOffset: new window.google.maps.Size(-13, -20) }}
              position={location && location}
              onCloseClick={() => setUserClicked(false)}
            >
              <div>
                <p>You are here</p>
              </div>
            </InfoWindow>
          ) : null}
          {stores !== [] &&
            stores.map((store, idx) => {
              return (
                <Marker
                  key={idx}
                  position={store.geometry.location}
                  onClick={() => setSelectedStore(store)}
                  icon={{
                    url: '/images/shoppingCart.png',
                    scaledSize: new window.google.maps.Size(30, 30),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                  }}
                />
              );
            })}
          {selectedStore ? (
            <InfoWindow
              options={{ pixelOffset: new window.google.maps.Size(-12, -8) }}
              position={selectedStore.geometry.location}
              onCloseClick={() => {
                setSelectedStore(null);
              }}
            >
              <div className="store-info-container">
                <img
                  className="store-img"
                  src={
                    selectedStore.photos
                      ? selectedStore.photos[0].getUrl({
                          maxWidth: 500,
                          maxHeight: 500,
                        })
                      : '/images/stockStore.jpeg'
                  }
                  width="200"
                  height="150"
                />
                <h2 className="store-name">
                  {selectedStore.name}
                  {selectedStore.business_status !== 'OPERATIONAL' ? (
                    <p>(Closed)</p>
                  ) : null}
                </h2>
                <div className="store-info">
                  <div className="selectedStore-address">
                    <p>{selectedStore.vicinity}</p>
                  </div>
                </div>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;
