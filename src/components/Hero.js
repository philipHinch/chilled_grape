//blobs
import blob1 from '../assets/images/hero_blob_left.svg'
import blob2 from '../assets/images/hero_blob_right.svg'

const Hero = () => {
    return (
        <section className="container heroContainer">
            <img src={blob1} alt="blob1" className="blob blob1" />
            <img src={blob2} alt="blob2" className="blob blob2" />
            <div className="mainHeroTextContainer">
                <h1 className="mainHeroText">Lorem ipsum dolor sit amet.</h1>
                <button className="btn btnRounded readMoreBtn">Read More</button>
            </div>
        </section>
    );
}

export default Hero;