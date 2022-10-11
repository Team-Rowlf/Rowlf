import React from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

function DraggableMarker(props) {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(props.position);
  const markerRef = useRef(null);
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

  React.useEffect(() => {
    props.func(position);
  }, [position]);

  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  // console.log(position);

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      icon={props.icon}
    >
      <Popup>You are here. Click and hold to drag</Popup>
    </Marker>
  );
}

export default DraggableMarker;
