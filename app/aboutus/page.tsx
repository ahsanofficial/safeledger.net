import  AboutUsBanner  from '@/components/Aboutus/AboutBanner/page';
import { AboutMain }   from '@/components/Aboutus/AboutMain/page';
import { AboutWhy }   from '@/components/Aboutus/AboutWhy/page';
import { Footer } from '@/components/Footer/page';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
           <AboutUsBanner/>
           <AboutMain/>
           <AboutWhy />
        </div>
    );
};

export default AboutUs;
