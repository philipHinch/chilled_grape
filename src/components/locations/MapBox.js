//mapbox
import Map, { NavigationControl, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = () => {

    const lat = 53.3004898
    const lon = -6.2634596

    return (
        <Map
            id='map'
            initialViewState={{
                longitude: lon,
                latitude: lat,
                zoom: 10
            }}
            // style={{ width: '100%', height: '500px', margin: 'auto' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken='pk.eyJ1IjoicGhpbGlwaGluY2giLCJhIjoiY2wzaDkzaXQzMG11ajNkdDVqZjlyNzM5bCJ9.-j4gQ4HOhxE8uCrDW3-fDw'>
            <NavigationControl />
            <Popup latitude={lat} longitude={lon}  >
                <div>address</div>
            </Popup>
        </Map >
    );
}

export default MapBox;