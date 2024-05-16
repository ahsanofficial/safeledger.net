import CompanySetup from '@/components/Landing/CompanySetup/page';
import Faq from '@/components/Landing/FAQs/page';
import LandingBanner from '@/components/Landing/LandingBanner/page';
import Client from '@/components/Landing/OURCLIENTS/page';
import Price from '@/components/Landing/Price/page';
import RegistrationProcess from '@/components/Landing/RegistrationProcess/page';
import SafeLedger from '@/components/Landing/SafeLedger/page';
import Testimonials from '@/components/Landing/Testimonials/page';
import Partner from '@/components/Landing/parnter/page';
import React from 'react';

const Landing = () => {


    return (
        <div>
            <LandingBanner/>
            <Partner/>
            <SafeLedger/>
            <CompanySetup/>
            <Price/>
            <RegistrationProcess/>
            <Client/>
            <Testimonials/>
            <Faq/>
        </div>
    )
}
export default Landing;