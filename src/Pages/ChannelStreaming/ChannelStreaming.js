import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import videojs from 'video.js';
import './ChannelStreaming.css';

const ChannelStreaming = (props) => {

    const videoRef = useRef(null);
    const playerRef = useRef(null);
    
    useEffect(() => {
        // make sure Video.js player is only initialized once
        if (!playerRef.current) {
          const videoElement = videoRef.current;
          if (!videoElement) return;
    
          const player = playerRef.current = videojs(videoElement, { 
              autoplay: true,
              controls: true,
              responsive: true,
              fluid: true,
              muted: true,
              sources: [{
                src: 'http://forevertv.me:8080/anand615/pass123/142784',
                alt: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4',
                type: 'application/x-mpegURL',
              }]
            }, () => {
              console.log("player is ready");
          });
        }
      }, [videoRef]);

    return (
        <div className='channelStreamingWrapper'>
            <ReactPlayer
                className="player-wrapper"
                // url='http://forevertv.me:8080/anand615/pass123/142784'
                controls
                autoPlay
                playing
                width='100%'
                height='100%'
            />
    </div>
    )
}

export default ChannelStreaming;