import React from 'react';
import styles from './style.module.css';
import { Button, Grid, Typography } from '@mui/material';

const Price = () => {


    return (
        <div className={`pt-10 pb-10 ${styles.bg}`} >
            <div className='text-center pb-10'>
                <Typography variant='h6' className='text-3xl text-indigo-900'>Exclusive Packages</Typography>
                <Typography className='text-sm pt-4 text-slate-500'>Budget Friendly packages made to meet your requirements</Typography>
            </div>

            <div className='flex justify-evenly	'>
                <div >
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className={`rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 ${styles.width}`}>
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Basic</p>
                                <p className="mt-6  items-baseline justify-center gap-x-2 text-left	">
                                    <p className='text-slate-400 text-sm'>Starting From</p>
                                    <span className="text-3xl font-bold tracking-tight text-rose-700">$349</span>
                                </p>


                                <Button
                                    className="mt-10 block w-full bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full	"
                                >
                                    Inquire Now
                                </Button>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    T&C Apply *
                                </p>
                                <ul className='text-left mt-10'>
                                    <li>* LTD Company</li>
                                    <li>* Digital Company Documents</li>
                                    <li>* London Registered Office</li>
                                    <li>* London Service Address</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className={`rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 bg-indigo-700 ${styles.width}`}>
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-white ">Standard</p>
                                <p className="mt-6  items-baseline justify-center gap-x-2 text-left	">
                                    <p className='text-slate-400 text-sm'>Starting From</p>
                                    <span className="text-3xl font-bold tracking-tight text-rose-700">$349</span>
                                </p>


                                <Button
                                    className="mt-10 block w-full bg-white px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full	"
                                >
                                    Inquire Now
                                </Button>
                                <p className="mt-6 text-xs leading-5 text-white">
                                    T&C Apply *
                                </p>
                                <ul className='text-left mt-10 text-white'>
                                    <li>* LTD Company</li>
                                    <li>* Digital Company Documents</li>
                                    <li>* London Registered Office</li>
                                    <li>* London Service Address</li>
                                    <li>* VAT Registration</li>
                                    <li>* PAYE Registration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className={`rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 ${styles.width}`}>
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Premium</p>
                                <p className="mt-6  items-baseline justify-center gap-x-2 text-left	">
                                    <p className='text-slate-400 text-sm'>Starting From</p>
                                    <span className="text-3xl font-bold tracking-tight text-rose-700">$349</span>
                                </p>


                                <Button
                                    className="mt-10 block w-full bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full	"
                                >
                                    Inquire Now
                                </Button>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    T&C Apply *
                                </p>
                                <ul className='text-left mt-10'>
                                    <li>* LTD Company</li>
                                    <li>* Digital Company Documents</li>
                                    <li>* London Registered Office</li>
                                    <li>* London Service Address</li>
                                    <li>* VAT Registration</li>
                                    <li>* PAYE Registration</li>
                                    <li>* Full Company Secretary Services</li>
                                    <li>* Apostilled Documents Service</li>
                                    <li>* Confirmation Statement</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Price;