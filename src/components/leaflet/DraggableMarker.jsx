import React, { useEffect } from 'react';
import { useMemo, useRef, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

function DraggableMarker(props) {
  const [position, setPosition] = useState(props.position);
  const markerRef = useRef(null);
  //gets the location and sets marker position whenever the marker is dragged
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  //function that updates the position of the center in the map component using marker's location after it's been dragged
  useEffect(() => {
    props.setMarkerLocation(position);
  }, [position]);

  //whenever position is updated in the map component, the marker's position will also be updated
  useEffect(() => {
    setPosition(props.position);
  }, [props.position]);

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      icon={props.icon}
    >
      <Popup className="popup">You are here. Click and hold to drag</Popup>
    </Marker>
  );
}

export default DraggableMarker;
