import React from 'react';
import styles from './style.module.css';
import image1 from '../../../public/landing/companysetup/image.png';
import { Button } from '@mui/material';
const CompanySetup = () => {


    return (
        <div className={` ${styles.bg}`} >
            <div className={`mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 lg:max-w-7xl lg:grid-cols-2 ${styles.center}`}>

                <div className="">
                    <img
                        src={image1.src}
                        alt="Walnut"
                        className='rounded-2xl'
                    />
                </div>
                <div className='mt-16 lg:mr-16'>
                    <h2 className="sm:text-3xl text-blue-600 font-extrabold text-3xl">UK Company Setup Guide 2024</h2>
                    <p className="mt-5 text-blue-600">Click on the button below to know the basics you must know as an entrepreneur before incorporating your company in the United Kingdom</p>

                    <Button variant="outlined" className="font-medium px-5 rounded-full mt-10">DOWNLOAD NOW</Button>
                </div>
            </div>
        </div>
    )
}
export default CompanySetup;