"use client"
import React from 'react';
import { ServicesPackage } from '@/components/Services/ServicesPackage/page';
import { ServicesAddress } from '@/components/Services/ServicesAddress/page';
import { ServicesOffer } from '@/components/Services/ServicesOffer/page';
import { ServiceHow } from '@/components/Services/ServicesHow/page';
import { ServicesProcess } from '@/components/Services/ServicesProcess/page';
import ServiceBanner from '@/components/Services/ServiceBanner/page';
import Faq from '@/components/Services/FAQs/page';

const Service = ({ params }: { params: { slug: string } }) => {
    const slug = params.slug; // Assuming you're using useParams to get the slug from the URL
    let jsonData = null;
    // Load different JSON files based on slug
    switch (slug) {
        case '1':
            jsonData = require('../../../public/json/services/service1.json');
            break;
        case '2':
            jsonData = require('../../../public/json/services/service2.json');
            break;
        case '3':
            jsonData = require('../../../public/json/services/service3.json');
            break;
        case '4':
            jsonData = require('../../../public/json/services/service4.json');
            break;
        case '5':
            jsonData = require('../../../public/json/services/service5.json');
            break;
        case '6':
            jsonData = require('../../../public/json/services/service6.json');
            break;
        case '7':
            jsonData = require('../../../public/json/services/service7.json');
            break;
        case '8':
            jsonData = require('../../../public/json/services/service8.json');
            break;
        case '9':
            jsonData = require('../../../public/json/services/service9.json');
            break;
        case '10':
            jsonData = require('../../../public/json/services/service10.json');
            break;
        case '11':
            jsonData = require('../../../public/json/services/service11.json');
            break;
        case '12':
            jsonData = require('../../../public/json/services/service12.json');
            break;
        case '13':
            jsonData = require('../../../public/json/services/service13.json');
            break;
        case '14':
            jsonData = require('../../../public/json/services/service14.json');
            break;
        default:
            // Handle default case
            break;
    }
    return (
        <div>
            <ServiceBanner Data={jsonData.London_Registered_Office} />
            <ServicesPackage />
            <ServicesAddress />
            <ServicesOffer />
            <ServiceHow />
            <ServicesProcess />
            <Faq />
        </div>
    );
};

export default Service;
