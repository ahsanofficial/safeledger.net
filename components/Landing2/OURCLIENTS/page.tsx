import React from 'react';
import styles from './style.module.css';
import { Grid, IconButton, Typography } from '@mui/material';
import disney from '../../../public/landing/client/disney.png';
import mac from '../../../public/landing/client/mac.png';
import netflex from '../../../public/landing/client/netflex.png';
import prime from '../../../public/landing/client/peime.png';


const Client = () => {


    return (
        <div className={` pt-16 ${styles.bg}`} >
            <div className='flex justify-evenly'>
                <div className='flex items-center'>
                    <img src={netflex.src} className={` ${styles.image}`} />
                </div>
                <div className='flex items-center'>
                    <img src={disney.src} className={` ${styles.image}`} />
                </div>
                <div className='flex items-center'>
                    <img src={prime.src} className={` ${styles.prime}`} />
                </div>
                <div className='flex items-center'>
                    <img src={prime.src} className={` ${styles.prime}`} />
                </div>
            </div>
            <div className='flex justify-evenly'>
                <div className='flex items-center'>
                    <img src={mac.src} className={` ${styles.image}`} />
                </div>
                <div className='flex items-center'>
                    <img src={mac.src} className={` ${styles.image}`} />
                </div>
                <div className='flex items-center'>
                    <img src={mac.src} className={` ${styles.image}`} />
                </div>
            </div>
        </div>

    )
}
export default Client;