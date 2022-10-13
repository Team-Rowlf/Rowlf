import React, { useEffect } from 'react';
import { GeoSearchControl } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

const LeafletSearchField = (props) => {
  // const provider = new MapBoxProvider({
  //   params: {
  //     access_token: apiKey,
  //   },
  // });

  const provider = new OpenStreetMapProvider();

  //configuration for leaflet-geosearch
  const searchControl = new GeoSearchControl({
    provider: provider,
    style: 'bar',
    showMarker: false,
  });

  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  //grab the coordinates for the map component
  map.on('geosearch/showlocation', function (event) {
    //using props function as workaround to pass coordinates back up to map component
    props.setLocation([event.location.y, event.location.x]);
  });
  return null;
};

export default LeafletSearchField;
