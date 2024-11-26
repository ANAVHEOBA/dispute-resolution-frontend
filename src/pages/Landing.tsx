import React from 'react';
import Hero from '../components/landing/Hero';
import Stats from '../components/landing/Stats';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import CallToAction from '../components/landing/CallToAction';

const Landing = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <CallToAction />
    </div>
  );
};

export default Landing;