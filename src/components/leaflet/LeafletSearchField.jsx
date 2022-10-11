import React, { useEffect } from 'react';
import { GeoSearchControl } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
// import { EsriProvider } from 'leaflet-geosearch';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
// import { GeoApiFrProvider } from 'leaflet-geosearch';

const LeafletSearchField = (props) => {
  // const provider = new MapBoxProvider({
  //   params: {
  //     access_token: apiKey,
  //   },
  // });

  // const provider = new EsriProvider();
  const provider = new OpenStreetMapProvider();
  // const provider = new GeoApiFrProvider();

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
    props.func([event.location.y, event.location.x]);
  });
  return null;
};

export default LeafletSearchField;
