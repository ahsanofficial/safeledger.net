import  AboutUsBanner  from '@/components/Aboutus/AboutBanner/page';
import { AboutMain }   from '@/components/Aboutus/AboutMain/page';
import { AboutWhy }   from '@/components/Aboutus/AboutWhy/page';
import { Footer } from '@/components/Footer/page';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "About Us - Safe Ledger",
    description: "Generated by create next app",
  };
  
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
