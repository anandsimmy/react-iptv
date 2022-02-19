import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './ChannelStreaming.css';

const ChannelStreaming = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams', searchParams.get('channelUrl'));

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

  return (
    <div className='channelStreamingWrapper'>
      <ReactPlayer
        className='player-wrapper'
        url={
          !searchParams.get('channelUrl') ||
          'http://forevertv.me:8080/movie/anand615/pass123/47041.mp4'
        }
        autoPlay
        playing
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default ChannelStreaming;
