import React from 'react';
import logo from '../../../Assets/images/iptvlogo.png';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className='navbarWrapper'>
            <span className='logoWrapper'>
                <img className='logoImage' src={logo} alt='Logo' />
            </span>
            <div className='linksAndSearchWrapper'>
                <div className='searchWrapper'></div>
                <div className='linksWrapper'>
                    <div tabIndex={0} className='linkItem'>TV Channels</div>
                    <div tabIndex={0} className='linkItem'>Movies</div>
                    <div tabIndex={0} className='linkItem'>More</div>
                    <div tabIndex={0} className='linkItem'>About</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;