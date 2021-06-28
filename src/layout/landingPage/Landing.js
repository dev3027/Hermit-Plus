import React from 'react';

import Nav from '../../components/Nav';
import LandingHero from '../../components/LandingHero';
import VideoTop from '../../components/VideoTop';
import InfoSection from '../../components/InfoSection';
import InfoCards from '../../components/InfoCards';
import Hermits from '../../components/Hermits';
import InfoTwo from '../../components/InfoTwo';
import VideoTwo from '../../components/VideoTwo';
import Footer from '../../components/Footer';

const Landing = () => {
  return (
    <div>
      <Nav />
      <LandingHero />
      <VideoTop />
      <InfoSection />
      <InfoCards />
      <Hermits />
      <InfoTwo />
      <VideoTwo />
      <Footer />
    </div>
  );
};

export default Landing;
