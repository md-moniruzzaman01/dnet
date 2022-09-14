import React from 'react';
import HeaderBanner from './HeaderBanner';
import HowWeWork from './HowWeWork';
import OurStory from './OurStory';
import WhereWeWork from './WhereWeWork';

const AboutPage = () => {
    return (
        <div className='min-h-screen pt-[8rem]'>
          <HeaderBanner></HeaderBanner>
          <OurStory></OurStory>
          <WhereWeWork></WhereWeWork>
          <HowWeWork></HowWeWork>
        </div>
    );
};

export default AboutPage;