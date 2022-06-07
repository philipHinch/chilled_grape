//components
import Navbar from "./Navbar";
//icons
import { Icon } from '@iconify/react';

const Header = ({ setIsMenuOpen }) => {

    const handleClick = () => {
        setIsMenuOpen(true)
    }

    return (
        <header>
            <h2 className="mainTitle">chilled grape</h2>
            <Navbar />
            <div className="loginButtonContainer">
                <button className="btn btnRounded loginBtn">Login</button>
            </div>
            <div className="hamburgerIconContainer" onClick={handleClick}>
                <Icon icon="charm:menu-hamburger" className="hamburgerIcon" />
            </div>
        </header>
    );
}

export default Header;