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
import List from 'react-virtualized/dist/commonjs/List';
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
                <Focusable
                  onClickEnter={() => {
                    filterHandler('');
                  }}
                >
                  <li
                    onClick={() => {
                      filterHandler('');
                    }}
                    className='channelListItem'
                  >
                    All
                  </li>
                </Focusable>
                <Focusable
                  onClickEnter={() => {
                    filterHandler('EN');
                  }}
                >
                  <li
                    onClick={() => {
                      filterHandler('EN');
                    }}
                    className='channelListItem'
                  >
                    English
                  </li>
                </Focusable>
                <Focusable
                  onClickEnter={() => {
                    filterHandler('China');
                  }}
                >
                  <li
                    onClick={() => {
                      filterHandler('China');
                    }}
                    className='channelListItem'
                  >
                    Chinese
                  </li>
                </Focusable>
                <Focusable
                  onClickEnter={() => {
                    filterHandler('French');
                  }}
                >
                  <li
                    onClick={() => {
                      filterHandler('French');
                    }}
                    className='channelListItem'
                  >
                    French
                  </li>
                </Focusable>
              </FocusableSection>
            </ul>
          </div>
          <div className='channelsView'>
            {channels?.length ? (
              channels.map((channelItem, index) => {
                return (
                  <Focusable
                    onClickEnter={() => {
                      navigate(
                        `/channel?channelUrl=${window.encodeURIComponent(
                          channelItem.url
                        )}`
                      );
                    }}
                    key={index}
                  >
                    <span
                      onClick={() => {
                        navigate(
                          `/channel?channelUrl=${window.encodeURIComponent(
                            channelItem.url
                          )}`
                        );
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
                    </span>
                  </Focusable>
                );
              })
            ) : (
              <div className='noResults'>Sorry, No Results Found!</div>
            )}
          </div>
        </section>
      </SpatialNavigation>
    </div>
  );
};

export default Homepage;
