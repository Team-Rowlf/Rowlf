import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import PlaceAutoComplete from './PlaceAutocomplete.jsx';
import StoreList from './StoreList.jsx';

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
    setSelectedStore(null)
  }

  const options = useMemo(
    () => ({
      mapId: '7fb386391a2ca376',
      clickableIcons: false,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
      },
      fullscreenControl: true,
    }),
    []
  );

  // Commenting this out to avoid extra queries to google api
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
        let openStores = results.filter(
          (result) =>
            result.business_status === 'OPERATIONAL' &&
            !result.name.includes('.com')
        );
        setStores(openStores);
      }
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
          const sanDiegoLatLng = { lat: 32.715736, lng: -117.161087 };
          setLocation(sanDiegoLatLng);
          setNearbyStores(sanDiegoLatLng);
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

  function openMarkerPopup(store) {
    setSelectedStore(store);
    mapRef.current?.panTo(store.geometry.location && store.geometry.location);
  }

  function centerMap() {}
  return (
    <div className="container">
      <div className="store-list-search">
        <PlaceAutoComplete setSearchLocation={getSearchLocation} />
        <StoreList stores={stores} openMarkerPopup={openMarkerPopup} />
      </div>
      <div className="map">
        <GoogleMap
          mapContainerClassName="map-container"
          zoom={15}
          center={location && location}
          options={options}
          onLoad={(map) => onMapLoad(map)}
        >
          <button
            className="center-map"
            onClick={() => {
              setSelectedStore(null);
              setUserClicked(true);
              mapRef.current?.panTo(location && location);
            }}
          >
            Recenter Map
          </button>
          <Marker
          className="marker"
            position={location && location}
            onClick={() => {
              setSelectedStore(null);
              setUserClicked(true);
              mapRef.current?.panTo(location && location);
            }}
            draggable={true}
            icon={{
              url: '/chefs-hat.svg',
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            onDragEnd={onMarkerDragEnd}
          />
          {userClicked ? (
            <InfoWindow
            className="info-window"
              options={{ pixelOffset: new window.google.maps.Size(1, -22) }}
              position={location && location}
              onCloseClick={() => setUserClicked(false)}
            >
              <div>
                <h4>You are here</h4>
              </div>
            </InfoWindow>
          ) : null}
          {stores !== [] &&
            stores.map((store, idx) => {
              return (
                <Marker
                className="marker"
                  key={idx}
                  position={store.geometry.location}
                  onClick={() => {
                    setUserClicked(false);
                    setSelectedStore(store);
                    mapRef.current?.panTo(
                      store.geometry.location && store.geometry.location
                    );
                  }}
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
            className="info-window"
              options={{ pixelOffset: new window.google.maps.Size(1, -5) }}
              position={selectedStore.geometry.location}
              onCloseClick={() => {
                setSelectedStore(null);
              }}
              maxHeight="50"
            >
              <div className="store-info-container">
                <h4 className="store-name">{selectedStore.name}</h4>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;
