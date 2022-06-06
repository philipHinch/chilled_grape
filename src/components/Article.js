//images
import plant from '../assets/images/plant.png'
import articleBlob from '../assets/images/article_blob.svg'


const Article = () => {
    return (
        <article className="articleContainer">
            <div className="articleLeft">
                <h2 className='articleMainText'>Lorem ipsum dolor sit amet.</h2>
                <p className='articleParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="articleRight">
                <img src={articleBlob} alt="article blob image" className='articleBlob' />
                <img src={plant} alt="plant image" className='plantImage' />
            </div>
        </article>
    );
}

export default Article;