import React from 'react';
import logo from '../../../Assets/images/iptvlogo.png';
import { Focusable, FocusableSection } from 'react-js-spatial-navigation';
import './Navbar.css';

const Navbar = ({ filterHandler }) => {
  return (
    <nav className='navbarWrapper'>
      <span className='logoWrapper'>
        <img className='logoImage' src={logo} alt='Logo' />
      </span>
      <div className='linksAndSearchWrapper'>
        <div className='searchWrapper'></div>
        <div className='linksWrapper'>
          <FocusableSection defaultElement='.tvChannels'>
            <Focusable
              onClickEnter={() => {
                filterHandler('channel');
              }}
              onFocus={() => {
                console.log('nav focus 1');
              }}
            >
              <div
                onClick={() => {
                  filterHandler('channel');
                }}
                className='linkItem tvChannels'
              >
                TV Channels
              </div>
            </Focusable>
            <Focusable
              onClickEnter={() => {
                filterHandler('movie');
              }}
              onFocus={() => {
                console.log('nav focus 2');
              }}
            >
              <div
                onClick={() => {
                  filterHandler('movie');
                }}
                className='linkItem'
              >
                Movies
              </div>
            </Focusable>
          </FocusableSection>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
