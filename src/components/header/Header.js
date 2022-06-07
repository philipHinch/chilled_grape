//components
import Navbar from "./Navbar";
//icons
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <header>
            <h2 className="mainTitle">chilled grape</h2>
            <Navbar />
            <div className="loginButtonContainer">
                <button className="btn btnRounded loginBtn">Login</button>
            </div>
            <div className="hamburgerIconContainer">
                <Icon icon="charm:menu-hamburger" className="hamburgerIcon" />
            </div>
        </header>
    );
}

export default Header;