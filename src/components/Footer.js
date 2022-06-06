//icons
import { Icon } from '@iconify/react';
//images
import footerBlob from '../assets/images/footer_blob.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footerLeft">
                {/* <img src={footerBlob} alt="footer blob" className='footerBlob' /> */}
                <h2 className="footerMainTitle">chilled grape</h2>
                <p className="footerParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="footerRight">
                <ul className="footerList footerList1">
                    <li className='footerListTitle'>Company</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Our Work</li>
                    <li>Contact</li>
                </ul>
                <ul className="footerList footerList2">
                    <li className='footerListTitle'>Products</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Our Work</li>
                    <li>Contact</li>
                </ul>
                <ul className="footerList footerList3">
                    <li className='footerListTitle footerListTitle3'>Follow Us</li>
                    <li></li>
                    <li></li>
                    <li className='socialIconContainer'><Icon icon="ph:telegram-logo-light" className='socialIcon' /></li>
                    <li className='socialIconContainer'><Icon icon="uit:twitter-alt" className='socialIcon' /></li>
                    <li className='socialIconContainer'><Icon icon="ant-design:youtube-outlined" className='socialIcon' /></li>
                    <li className='socialIconContainer'><Icon icon="icon-park-outline:facebook-one" className='socialIcon' /></li>
                    <li className='socialIconContainer'><Icon icon="akar-icons:instagram-fill" className='socialIcon' /></li>
                    <li className='socialIconContainer'><Icon icon="ph:tiktok-logo" className='socialIcon' /></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;