import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { icon } from 'leaflet'

const LeafletMap = () => {
    const [location, setLocation] = useState(null)

    // will likely need some methods for getting location, etc
    const userIcon = icon({iconUrl: '/chefs-hat.svg', iconSize: [30,30]})

    // just placing randomly nearby for now to test out placing a few; need to look into locations next
    const [marker1, setMarker1] = useState([51.5, -.05])
    const [marker2, setMarker2] = useState([51.49, -.13])
    const [marker3, setMarker3] = useState([51.525, -.1])

    // first step: find user's location or have them input location
    // -- can find user location if they opt in to location services;
    // -- should look into how to find location by zipcode if possible
    // -- in case people don't want to opt in
    // after that, need to search nearby location for grocery stores
    // -- might require another API? unsure at the moment
    // after that, would want to find an appropriate place to actually insert the map
    // then, could work on other stuff for now; later, could try integrating into actual stores to check if ingredients for sale?

    // will likely need to use navigator.geolocation for user location
    // for stores, look into th GeoJSON api or something

    React.useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation([position.coords.latitude, position.coords.longitude]);
                console.log(position.coords)
                setMarker1([position.coords.latitude+.015, position.coords.longitude-.02])
                setMarker2([position.coords.latitude-.01, position.coords.longitude-.005])
                setMarker3([position.coords.latitude+.02, position.coords.longitude+.015])
            })
        } else {
            // do something else
        }
    },[])

    return(
        location ?
        <div>
            <h2>Testing Leaflet</h2>
        <MapContainer id="map" center={location} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={userIcon} position={location}>
                <Popup>
                    You are here.
                </Popup>
            </Marker>
            <Marker position={marker1}>
                <Popup>
                    Test drop one.
                </Popup>
            </Marker>
            <Marker position={marker2}>
                <Popup>
                    Test drop two.
                </Popup>
            </Marker>
            <Marker position={marker3}>
                <Popup>
                    Test drop three.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
        : <></>
    )
}

export default LeafletMap;