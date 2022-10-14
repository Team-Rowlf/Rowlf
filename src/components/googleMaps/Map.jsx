import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from '@react-google-maps/api';
import PlaceAutoComplete from './PlaceAutocomplete.jsx';

const Map = () => {
  const [location, setLocation] = useState(null);
  // const [map, setMap] = useState({});
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [userClicked, setUserClicked] = useState(false);
  const [selected, setSelected] = useState(null);
  const [searchLocation, setSearchLocation] = useState(null);
  const [searched, setSearched] = useState(false);

  const mapRef = useRef();
  //refer to map instance as "mapRef.current"
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  useEffect(() => {}, [location]);

  const options = useMemo(
    () => ({
      mapId: '7fb386391a2ca376',
      clickableIcons: false,
      disableDefaultUI: true,
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

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        setStores(results);
      }
    }
  }
  console.log(stores);
  console.log(userClicked);

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

  function getSearchLocation(data) {
    setSearchLocation(data);
    setSearched(!searched);
  }

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
          onLoad={(map) => onLoad(map)}
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
          />
          {userClicked ? (
            <InfoWindow
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
              className="store-info"
              position={selectedStore.geometry.location}
              onCloseClick={() => {
                setSelectedStore(null);
              }}
            >
              <div>
                <p>{selectedStore.name}</p>
                <p>{selectedStore.vicinity}</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;
