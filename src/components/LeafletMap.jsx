import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { divIcon, icon } from 'leaflet'

const LeafletMap = () => {
    // will likely need some methods for getting location, etc
    const userIcon = icon({iconUrl: '/chefs-hat.svg', iconSize: [30,30]})

    return(
        <div>
            <h2>Testing Leaflet</h2>
        <MapContainer id="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={userIcon} position={[51.505, -0.09]}>
                <Popup>
                    You are here.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
}

export default LeafletMap;