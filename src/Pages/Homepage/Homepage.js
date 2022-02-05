import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SpatialNavigation, {
  Focusable,
  FocusableSection,
} from 'react-js-spatial-navigation';
import Navbar from '../../Components/layout/Navbar/Navbar';
import { channelList } from '../../Assets/ChannelList';
import defaultChannelImage from '../../Assets/images/img1.png';
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    var backEvent = function (e) {
      console.log('back event', e);
      if (e.keyName === 'back') {
        window.history.back();
      }
    };

    // add eventListener for tizenhwkey (Back Button)
    window.addEventListener('tizenhwkey', backEvent, false);
  }, []);

  return (
    <div className='homepageWrapper'>
      <SpatialNavigation>
        <Navbar />
        <section className='contentWrapper'>
          <div className='channelListWrapper'>
            <ul className='channelList'>
              <FocusableSection>
                <Focusable>
                  <li tabIndex={0} className='channelListItem'>
                    All
                  </li>
                </Focusable>
                <Focusable>
                  <li tabIndex={0} className='channelListItem'>
                    Kurdish
                  </li>
                </Focusable>
                <Focusable>
                  <li tabIndex={0} className='channelListItem'>
                    Arabic
                  </li>
                </Focusable>
                <Focusable>
                  <li tabIndex={0} className='channelListItem'>
                    Turkish
                  </li>
                </Focusable>
                <Focusable>
                  <li tabIndex={0} className='channelListItem'>
                    English
                  </li>
                </Focusable>
                <Focusable>
                  <li tabIndex={0} className='channelListItem'>
                    French
                  </li>
                </Focusable>
              </FocusableSection>
            </ul>
          </div>
          <div className='channelsView'>
            {channelList.items.map((channelItem, index) => {
              return (
                <Focusable
                  onFocus={() => {
                    // console.log('hi', channelItem);
                  }}
                  onClickEnter={() => {
                    navigate(`/channel?channelUrl=${channelItem.url}`);
                  }}
                  key={index}
                >
                  <span
                    onClick={() => {
                      navigate(`/channel?channelUrl=${channelItem.url}`);
                    }}
                    className='channelItem'
                  >
                    <img
                      className='channelItemImage'
                      src={channelItem.tvg.logo}
                      alt='channelImage'
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = defaultChannelImage;
                      }}
                    />
                  </span>
                </Focusable>
              );
            })}
          </div>
        </section>
      </SpatialNavigation>
    </div>
  );
};

export default Homepage;
