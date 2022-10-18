import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const PlaceAutoComplete = ({ setSearchLocation }) => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  async function handleSelect(value) {
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latlng);
    setSearchLocation(latlng);
  }

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="autocomplete-container">
            <Link to="/user/shoppingList" className="back-link">
              Back
            </Link>
            <div className="location-input-container">
              <input
                {...getInputProps({
                  placeholder: 'Search Place...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {suggestions.map((suggestion) => {
                  return (
                    <div
                      className="suggestion-locations"
                      {...getSuggestionItemProps(suggestion, {})}
                      key={suggestion.placeId}
                    >
                      <i className="material-icons location-icon">
                        location_on
                      </i>{' '}
                      <span className='"suggestion-text'>
                        {suggestion.description}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default PlaceAutoComplete;
