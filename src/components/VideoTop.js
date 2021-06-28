import React from 'react';
import cubVideo from '../images/cubFanS8E1thumb.webp';
import docM77Video from '../images/docm77S8E1thumb.webp';

const VideoTop = () => {
  return (
    <>
      <section className='video-top'>
        <img
          className='border'
          src={cubVideo}
          alt='Cub Fan season eight episode one'
        />
        <img
          className='border'
          src={docM77Video}
          alt='doc m 77 season eight episode one'
        />
      </section>
    </>
  );
};

export default VideoTop;
