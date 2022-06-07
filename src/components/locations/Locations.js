//hooks
import { useEffect, useState } from "react";
//components
import Card from "./Card";
import MapBox from "./MapBox";

const Locations = () => {

    const [locations, setLocations] = useState(null)
    const [clickedLocation, setClickedLocation] = useState(null)
    const [firstLocation, setFirstLocation] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [geoLocation, setGeoLocation] = useState(null)

    //gets data on page load
    useEffect(() => {
        getLocations()
    }, [])

    //fetches data from api and stores it in state
    const getLocations = async () => {
        setIsLoading(true)
        const data = await fetch('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/locations')
        const res = await data.json()
        //saves all locations in state
        setLocations(res[0])
        //saves first location in state
        setFirstLocation({
            name: res[0][0].location_name,
            address: res[0][0].address_line,
            lat: res[0][0].lat,
            lng: res[0][0].lng
        })
        setIsLoading(false)
    }

    return (
        <section className="locationsContainer" id='locationsContainer'>
            {!isLoading &&
                <MapBox
                    clickedLocation={clickedLocation}
                    firstLocation={firstLocation}
                    geoLocation={geoLocation}
                    setGeoLocation={setGeoLocation}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading} />}
            <h2 className="locationsMainTitle">our locations</h2>
            <div className="cardContainer">
                {locations && !isLoading && locations.map(location => (
                    <Card
                        key={location.id}
                        name={location.location_name}
                        address={location.address_line}
                        pin={location.pin}
                        share={location.share}
                        image={location.image}
                        locations={locations}
                        setClickedLocation={setClickedLocation}
                        setIsLoading={setIsLoading}
                        setGeoLocation={setGeoLocation} />
                ))}
            </div>
        </section>
    );
}

export default Locations;