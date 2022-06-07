//icons
import addressIcon from '../../assets/icons/address.svg'
import pinIcon from '../../assets/icons/pin.svg'
import shareIcon from '../../assets/icons/share.svg'

const Card = ({ name, address, pin, share, image, setClickedLocation, locations, setIsLoading, setGeoLocation }) => {

    //handles card click, waits for setting data to state before setting loading state to false
    const handleClick = async (e) => {
        setIsLoading(true)
        const name = e.target.id
        const newLocation = locations.filter(location => {
            if (location.location_name === name) {
                return true
            }
        })
        //saves clicked location data in clickedLocation state
        await setClickedLocation(newLocation)
        //saves clicked location coords in geoLocation state
        await setGeoLocation({
            lat: newLocation[0].lat,
            lng: newLocation[0].lng
        })
        setIsLoading(false)
    }

    return (
        <a href='#locationsContainer' className="card" onClick={handleClick} id={name}>
            <div className="cardLeft" id={name}>
                <img src={image} alt="location image" className='locationImage' id={name} />
            </div>
            <div className="cardRight" id={name}>
                <div className="innerCardRight" id={name}>
                    <h3 className="locationName" id={name}>{name}</h3>
                    <div className="addressContainer" id={name}>
                        <div className="addressIconContainer" id={name}>
                            <img src={addressIcon} alt="address icon" className='cardIcon' id={name} />
                        </div>
                        <p className="addressText" id={name}>{address}</p>
                    </div>

                    <div className="pinContainer" id={name}>
                        <div className="pinIconContainer" id={name}>
                            <img src={pinIcon} alt="pin icon" className='cardIcon' id={name} />
                        </div>
                        <p className="pinText" id={name}>{pin.length > 25 ? pin.substr(0, 25) + ' ' + '...' : pin}</p>
                    </div>

                    <div className="shareContainer" id={name}>
                        <div className="shareIconContainer" id={name}>
                            <img src={shareIcon} alt="share icon" className='cardIcon' id={name} />
                        </div>
                        <p className="shareText" id={name}>{share.length > 25 ? share.substr(0, 25) + ' ' + '...' : share}</p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Card;