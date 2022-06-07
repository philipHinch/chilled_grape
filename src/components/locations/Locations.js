//components
import Card from "./Card";
import MapBox from "./MapBox";

const Locations = () => {
    return (
        <section className="locationsContainer">
            <MapBox />
            <h2 className="locationsMainTitle">our locations</h2>
            <div className="cardContainer">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}

export default Locations;