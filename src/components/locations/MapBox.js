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
                    zoom: 13
                }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
                <NavigationControl />
                <Popup latitude={geoLocation.lat} longitude={geoLocation.lng} closeOnClick={false}  >
                    {firstLocation && !clickedLocation && <div className='popupName'>{firstLocation.name}</div>}
                    {firstLocation && !clickedLocation && <div className='popupAddress'>{firstLocation.address}</div>}
                    {clickedLocation && <div className='popupName'>{clickedLocation[0].location_name}</div>}
                    {clickedLocation && <div className='popupAddress'>{clickedLocation[0].address_line}</div>}
                </Popup>
            </Map >}
        </>
    );
}

export default MapBox;