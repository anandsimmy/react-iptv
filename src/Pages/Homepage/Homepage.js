import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SpatialNavigation, {
  Focusable,
  FocusableSection,
} from 'react-js-spatial-navigation';
import Navbar from '../../Components/layout/Navbar/Navbar';
import Image from '../../Components/commons/Image/Image';
import { channelList } from '../../Assets/ChannelList';
import defaultChannelImage from '../../Assets/images/img1.png';
import placeholderImage from '../../Assets/images/placeholder.png';
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();
  const [channels, setChannels] = useState(channelList.items.slice(0));

  useEffect(() => {
    const backEvent = function (e) {
      if (e.keyName === 'back') {
        console.log('back event', e, window.location.href);
        window.history.back();
      }
    };

    // add eventListener for tizenhwkey (Back Button)
    window.addEventListener('tizenhwkey', backEvent);
    return () => {
      window.removeEventListener('tizenhwkey', backEvent);
    };
  }, []);

  const filterHandler = (val) => {
    console.log('val', val);
    const newChannels = channelList.items.filter((item) => {
      return item.raw.includes(val);
    });
    setChannels(newChannels);
  };

  return (
    <div className='homepageWrapper'>
      <SpatialNavigation>
        <Navbar filterHandler={filterHandler} />
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
            {channels.map((channelItem, index) => {
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
                    title={channelItem.url}
                  >
                    <Image
                      url={channelItem.tvg.logo}
                      altUrl={defaultChannelImage}
                      alt='channelImage'
                      placeholderImage={placeholderImage}
                    />
                    {/* <img
                      className='channelItemImage'
                      src={channelItem.tvg.logo ?? defaultChannelImage}
                      alt='channelImage'
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = defaultChannelImage;
                      }}
                    /> */}
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
