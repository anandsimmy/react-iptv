import React from 'react';
import Navbar from '../../Components/layout/Navbar/Navbar';
import iptv1 from '../../Assets/images/img1.png';
import iptv2 from '../../Assets/images/img2.png';
import iptv3 from '../../Assets/images/img3.png';
import iptv4 from '../../Assets/images/img4.png';
import './Homepage.css';

const Homepage = () => {

    const getImageSrc = (index) => {
        const imageIndex = (index % 4);
        switch (imageIndex) {
            case 0:
                return iptv1;
            case 1:
                return iptv2;
            case 2:
                return iptv3;
            default:
                return iptv4
        }
    }

    return (
        <div className='homepageWrapper'>
            <Navbar />
            <section className='contentWrapper'>
                <div className='channelListWrapper'>
                    <ul className='channelList'>
                        <li tabIndex={0} className='channelListItem'>All</li>
                        <li tabIndex={0} className='channelListItem'>Kurdish</li>
                        <li tabIndex={0} className='channelListItem'>Arabic</li>
                        <li tabIndex={0} className='channelListItem'>Turkish</li>
                        <li tabIndex={0} className='channelListItem'>English</li>
                        <li tabIndex={0} className='channelListItem'>French</li>
                    </ul>
                </div>
                <div className='channelsView'>
                    {
                        Array(18).fill(0).map((channelItem, index) => {
                            return (
                                <div className='channelItem'>
                                    <img tabIndex={0} className='channelItemImage' src={getImageSrc(index)} alt='channelImage' />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Homepage;