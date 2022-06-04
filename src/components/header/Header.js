//components
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <h1 className="mainTitle">chilled grape</h1>
            <Navbar />
            <button className="btn btnRounded loginBtn">login</button>
        </header>
    );
}

export default Header;