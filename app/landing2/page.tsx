import LandingBanner from '@/components/Landing2/LandingBanner2/page';
import React from 'react';
import { Landing2Qualities } from '@/components/Landing2/Landing2Qualities/page';
import  Landing2Mission  from '@/components/Landing2/Landing2Mission/page';
import { Landing2Taking } from '@/components/Landing2/Landing2Taking/page';
import { Landing2Services } from '@/components/Landing2/Landing2Services/page';
import { Landing2Caring } from '@/components/Landing2/Landing2Caring/page';
import { Landing2Client } from '@/components/Landing2/Landing2Client/page';
import { Landing2Blog } from '@/components/Landing2/Landing2Blog/page';

const Landing = () => {


    return (
        <div>
            <LandingBanner/>
            <Landing2Qualities/>
            <Landing2Mission />
            <Landing2Taking />
            <Landing2Services />
            <Landing2Caring />
            <Landing2Client />
            <Landing2Blog />
        </div>
    )
}
export default Landing;