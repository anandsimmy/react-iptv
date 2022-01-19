import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/layout/Navbar/Navbar';
import { channelList } from '../../Assets/ChannelList';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className='homepageWrapper'>
      <Navbar />
      <section className='contentWrapper'>
        <div className='channelListWrapper'>
          <ul className='channelList'>
            <li tabIndex={0} className='channelListItem'>
              All
            </li>
            <li tabIndex={0} className='channelListItem'>
              Kurdish
            </li>
            <li tabIndex={0} className='channelListItem'>
              Arabic
            </li>
            <li tabIndex={0} className='channelListItem'>
              Turkish
            </li>
            <li tabIndex={0} className='channelListItem'>
              English
            </li>
            <li tabIndex={0} className='channelListItem'>
              French
            </li>
          </ul>
        </div>
        <div className='channelsView'>
          {channelList.items.map((channelItem, index) => {
            return (
              <Link
                to={`/channel?channelUrl=${channelItem.url}`}
                key={index}
                className='channelItem'
              >
                <img
                  tabIndex={0}
                  className='channelItemImage'
                  src={channelItem.tvg.logo}
                  alt='channelImage'
                />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
