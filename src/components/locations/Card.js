//icons
import addressIcon from '../../assets/icons/address.svg'
import pinIcon from '../../assets/icons/pin.svg'
import shareIcon from '../../assets/icons/share.svg'

const Card = () => {
    return (
        <div className="card">
            <div className="cardLeft">
                left
            </div>
            <div className="cardRight">
                <div className="innerCardRight">
                    <h3 className="locationName">consectetur Elit</h3>
                    <div className="addressContainer">
                        <div className="addressIconContainer">
                            <img src={addressIcon} alt="address icon" className='cardIcon' />
                        </div>
                        <p className="addressText">16 Poole Hill, BH2 5PS</p>
                    </div>

                    <div className="pinContainer">
                        <div className="pinIconContainer">
                            <img src={pinIcon} alt="pin icon" className='cardIcon' />
                        </div>
                        <p className="pinText">Lorem ipsum dolor sit</p>
                    </div>

                    <div className="shareContainer">
                        <div className="shareIconContainer">
                            <img src={shareIcon} alt="share icon" className='cardIcon' />
                        </div>
                        <p className="shareText">Lorem ipsum dolor sit </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;