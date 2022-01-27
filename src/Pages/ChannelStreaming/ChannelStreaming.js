import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './ChannelStreaming.css';

const ChannelStreaming = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams', searchParams.get('channelUrl'));

  return (
    <div className='channelStreamingWrapper'>
      <ReactPlayer
        className='player-wrapper'
        url={
          searchParams.get('channelUrl') ||
          'http://210.210.155.35/qwr9ew/s/s50/index.m3u8'
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
