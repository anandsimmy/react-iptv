import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './ChannelStreaming.css';

const ChannelStreaming = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='channelStreamingWrapper'>
      <ReactPlayer
        className='player-wrapper'
        url={
          !searchParams.get('channelUrl') ||
          'http://forevertv.me:8080/anand615/pass123/142784'
        }
        controls
        autoPlay
        playing
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default ChannelStreaming;
