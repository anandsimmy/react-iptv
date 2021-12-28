import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className='navbarWrapper'>
            <span className='logoWrapper'></span>
            <div className='linksAndSearchWrapper'>
                <div className='searchWrapper'></div>
                <div className='linksWrapper'>
                    <div className='linkItem'>TV Channels</div>
                    <div className='linkItem'>Movies</div>
                    <div className='linkItem'>More</div>
                    <div className='linkItem'>About</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;