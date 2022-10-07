import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { icon } from 'leaflet'
import * as L from 'leaflet'
import * as esri from 'esri-leaflet-geocoder'
// import {Geocoding} from 'esri-leaflet-geocoder'
// import esri from 'esri-leaflet'
// import * as esriGeo from 'esri-leaflet-geocoder'
// import * as L from 'esri-leaflet-geocoder'
// const esriKey = process.env.esriApiKey;

// NEED TO MOVE OUT OF THIS FILE BEFORE UPLOADING; KEEP HIDDEN IN .ENV FILE
const esriKey = 'AAPKd8a2b2cd63594eed81b45588dd9ad119DotKBY2R96jMyV-lnJabjG7gfi5N_4sKd_t1ttGbLHAxwcrxtrzQdBanJ5wR_lkw'

const LeafletMap = () => {
    const [location, setLocation] = useState(null)
    const [stores, setStores] = useState([])
    const userIcon = icon({iconUrl: '/chefs-hat.svg', iconSize: [30,30]})

    async function showGroceryStores(latLng) {
        
        // returning some results that are not grocery stores, but are tagged as grocery
        // possible workaround: at least for us, could try to compile a list of major national/regional grocery stores
        // might be tedious though; but that way, could at least filter through results and only inclue results that somewhat make sense
        console.log(esri)
        let obj = new esri.Geocode({
            apikey: esriKey
        })
        .category("Grocery")
        .nearby(latLng,10)
        
        .run((error, results, response) => {if (error) return; 
            console.log(results.results)
            setStores(results.results)
        })
    }

    // first step: find user's location or have them input location
    // -- can find user location if they opt in to location services;
    // -- should look into how to find location by zipcode if possible
    // -- in case people don't want to opt in

    React.useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latLng = [position.coords.latitude, position.coords.longitude]
                setLocation(latLng);
                showGroceryStores(latLng)
            })
        } else {
            // do something else
            // may want to initialize location to some default here
            // then, can look into adding geosearch to the map below
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
            {stores.map((store,idx) => {
                return (
                    <Marker key={idx} position={store.latlng}>
                        <Popup>
                            {store.text} <br/> {store.properties.Place_addr}
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
        </div>
        : <></>
    )
}

export default LeafletMap;