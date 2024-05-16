import { Button } from '@mui/material';
import React from 'react';
import image1 from '../../../public/home/experts/image1.jpeg';
import styles from './style.module.css';

const Experts = () => {


    return (
        <div className=''>
            <div className={`flex sm:pt-6 lg:pt-6 ${styles.bg}`}>
                <div className={`mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-4  sm:px-4 sm:py-24 lg:py-24 lg:max-w-7xl lg:grid-cols-2 ${styles.center}`}>
                    <div className='mt-10 lg:mt-16 sm:mt-16 lg:mr-16'>
                        <h2 className="sm:text-4xl text-blue-600 font-extrabold sm:text-3xl lg:text-3xl text-2xl sm:pr-10 lg:pr-10">Connect with our Experts</h2>
                        <p className="mt-5 text-blue-600 sm:pr-10 lg:pr-10">
                            Connect with our SafeLedger experts today to guide you through each phase of your business journey, ensuring compliance, efficiency, and growth. Let's make your business ambitions a reality.
                        </p>

                        <Button variant="outlined" className="font-medium px-5 rounded-full lg:mt-10 sm:mt-10 ">Book Consultation</Button>
                    </div>
                    <div className="">
                        <img
                            src={image1.src} 
                            alt="Walnut"
                            className='rounded-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Experts;