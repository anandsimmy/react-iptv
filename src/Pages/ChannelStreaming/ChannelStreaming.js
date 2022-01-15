import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ReactHlsPlayer from 'react-hls-player';
import './ChannelStreaming.css';

const ChannelStreaming = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams', searchParams.get('channelUrl'));

  return (
    <div className='channelStreamingWrapper'>
      <ReactHlsPlayer
        src={
          searchParams.get('channelUrl') ||
          'http://forevertv.me:8080/anand615/pass123/142784'
        }
        autoPlay={false}
        controls={true}
        width='100%'
        height='auto'
        muted
      />
      ,
      {/* <ReactPlayer
        className='player-wrapper'
        url={
          searchParams.get('channelUrl') ||
          'http://forevertv.me:8080/anand615/pass123/142784'
        }
        controls
        autoPlay
        playing
        muted
        width='100%'
        height='100%'
      /> */}
    </div>
  );
};

export default ChannelStreaming;
