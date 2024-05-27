import React from 'react';
import styles from './style.module.css';
import { Button, Link } from '@mui/material';
import image1 from '../../../public/home/homebanner/image1.jpeg';
import image2 from '../../../public/home/homebanner/image2.jpeg';
import image3 from '../../../public/home/homebanner/image3.jpeg';
export const Homebanner = () => {


    return (
        <div className={`flex ${styles.bg}`}>
            <div className={`mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:py-24 sm:py-24 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ${styles.center}`}>
                <div className='mt-1'>
                    <h2 className="text-2xl font-bold tracking-tight text-blue-color sm:text-4xl mt-6 lg:text-4xl">Innovate.Incorporate.Escalate</h2>
                    <p className="mt-10 text-gray-500 font-semibold leading-8">SafeLedger drives business growth with comprehensive services including incorporation, accounting, and administration. Our expert support ensures seamless operations and compliance, enabling you to focus on innovation and expansion. Trust SafeLedger for your business success. </p>
                    <dl className={`${styles.flex} mt-16`} >

                        <Link href="/aboutus" className="no-underline">
                            <Button variant="contained" className={`${styles.btnWidth} mt-2 font-medium px-5 mr-2 bg-blue-color`} size="large" fullWidth>About Us</Button>
                        </Link>

                        <Link href="/contactus" className="no-underline">
                            <Button variant="outlined" className={`${styles.btnWidth} mt-2 font-medium px-5 ml-2`} size="large" fullWidth>Contact Us</Button>
                        </Link>

                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 mb-6">
                    <div className='sm:mt-0 lg:mt-0 mt-2'>
                        <img
                            src={image1.src}
                            alt="Walnut"
                            className={`rounded-lg bg-gray-100 ${styles.imageShadow}`}
                        />
                    </div>
                    <div>
                        <img
                            src={image2.src}
                            alt="Top ."
                            className={`rounded-lg bg-gray-100 ${styles.imageShadow}`}
                        />
                        <img
                            src={image3.src}
                            alt="Side ."
                            className={`rounded-lg bg-gray-100 mt-12 ${styles.imageShadow}`}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}