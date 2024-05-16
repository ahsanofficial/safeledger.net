import React from 'react';
import styles from './style.module.css';
import { Typography } from '@mui/material';

const SafeLedger = () => {


    return (
        <div className={`pt-16 ${styles.bg}`} >
            <Typography variant='h4' className={`text-3xl sm:text-5xl lg:text-5xl text-center ${styles.tet}`} >
                Why Choose Safe Ledger?
            </Typography>
            <p className={`mx-auto mt-6 ${styles.width}`}>Safe Ledger drives business growth with comprehensive services
                including incorporation, accounting, and administration.
                Our expert support ensures seamless operations and compliance,
                enabling you to focus on innovation and expansion.
            </p>
            <Typography className={`text-blue-700 text-3xl text-center mt-8 ${styles.text}`} >Trust Safe Ledger for your business success.</Typography>
        </div>
    )
}
export default SafeLedger;