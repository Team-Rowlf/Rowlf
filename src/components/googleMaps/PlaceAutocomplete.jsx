import React, { useState } from 'react';
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
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div key={suggestions.placeId} className="location-input-container">
          <input
            {...getInputProps({
              placeholder: 'Search Place...',
              className: 'location-search-input',
            })}
          />
          <div
            key={suggestions.placeId}
            className="autocomplete-dropdown-container"
          >
            {suggestions.map((suggestion) => {
              return (
                <div
                  key={suggestion.placeId}
                  className="suggestion-locations"
                  {...getSuggestionItemProps(suggestion, {})}
                >
                  <i className="material-icons location-icon">location_on</i>{' '}
                  <span className='"suggestion-text'>
                    {suggestion.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default PlaceAutoComplete;
