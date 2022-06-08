//icons
import { Icon } from '@iconify/react';

const SlidingMenu = ({ setIsMenuOpen, isMenuOpen }) => {

    //handles close icon click
    const handleCloseClick = () => {
        setIsMenuOpen(false)
    }

    //handles dark overlay click
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('slidingMenuContainer')) {
            setIsMenuOpen(false)
        }
    }

    return (
        <nav className={`slidingMenuContainer ${ isMenuOpen ? '' : 'hidden' }`} onClick={handleOverlayClick}>
            <div className="slidingMenuInner">
                <div className="slidingMenuInnerInner">
                    <ul className='slidingMenuList'>
                        <li className="navLink"><a href="#">Home</a></li>
                        <li className="navLink"><a href="#">About</a></li>
                        <li className="navLink"><a href="#">Blog</a></li>
                        <li className="navLink"><a href="#">Pricing</a></li>
                    </ul>
                    <button className="btn btnRounded loginBtn">Login</button>
                </div>
            </div>
            <div className="closeIconContainer" onClick={handleCloseClick}>
                <Icon icon="ci:close-small" className='closeIcon' />
            </div>
        </nav>
    );
}

export default SlidingMenu;