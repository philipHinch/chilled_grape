//mapbox
import Map, { NavigationControl, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
//hooks
import { useEffect } from 'react';

const MapBox = ({ clickedLocation, firstLocation, isLoading, geoLocation, setGeoLocation }) => {

    //sets geolocation data based on wether a user clicked a location or not
    useEffect(() => {
        clickedLocation
            ? setGeoLocation({
                lat: clickedLocation[0].lat,
                lng: clickedLocation[0].lng
            })
            : setGeoLocation({
                lat: firstLocation.lat,
                lng: firstLocation.lng
            })
    }, [])

    return (
        <>
            {geoLocation && !isLoading && <Map
                id='map'
                initialViewState={{
                    longitude: geoLocation.lng,
                    latitude: geoLocation.lat,
                    zoom: 1
                }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken='pk.eyJ1IjoicGhpbGlwaGluY2giLCJhIjoiY2w0NGFyNDVzMDJxNTNicHozaG5zMW9jbCJ9.LEAoPKwi8JPrBedTIONKxQ'>
                <NavigationControl />
                <Popup latitude={geoLocation.lat} longitude={geoLocation.lng} closeOnClick={false}  >
                    {firstLocation && !clickedLocation && <div>{firstLocation.name}</div>}
                    {firstLocation && !clickedLocation && <div>{firstLocation.address}</div>}
                    {clickedLocation && <div>{clickedLocation[0].location_name}</div>}
                    {clickedLocation && <div>{clickedLocation[0].address_line}</div>}
                </Popup>
            </Map >}
        </>
    );
}

export default MapBox;