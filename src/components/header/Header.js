//components
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <h2 className="mainTitle">chilled grape</h2>
            <Navbar />
            <div className="loginButtonContainer">
                <button className="btn btnRounded loginBtn">Login</button>
            </div>
        </header>
    );
}

export default Header;