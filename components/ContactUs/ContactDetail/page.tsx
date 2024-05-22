import React from 'react';
import styles from './style.module.css';
import { Button, Grid, TextField, Typography } from '@mui/material';

const ContactDetails: React.FC = () => {

    return (
        <div className={`sm:pt-10 lg: pt-10 pb-10 ${styles.bg}`}>
            <p className='text-slate-700 font-extralight text-sm'>
                <span className='text-blue-800 font-semibold'>Note: </span>
                RegisterKaro is a renowned group of individual professionals that has established itself as a market leader in guiding corporate houses and entrepreneurs. We specialize in Company Incorporation, Tax, and all other services rendered by professionals independently. Our registered office is located at #101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008
            </p>
            <div>
                <Grid container spacing={3} className={`${styles.center} sm:mt-6`}>
                    <Grid item xs={12} sm={4}>
                        <div>
                            <Typography variant='h6' className='text-blue-700 font-bold'>Information</Typography>
                            <p className='text-slate-700 font-thin text-sm'>Info@safeledger.net</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className=''>
                            <Typography variant='h6' className='text-blue-700 font-bold'>Sales</Typography>
                            <p className='text-slate-700 font-thin text-sm'>Sales@safeledger.net</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className=''>
                            <Typography variant='h6' className='text-blue-700 font-bold'>Support</Typography>
                            <p className='text-slate-700 font-thin text-sm'>Support@safeledger.net</p>
                        </div>
                    </Grid>

                </Grid>
                <div className={`mt-12 ${styles.center}`}>
                    <p className='text-blue-700 font-thin text-sm font-bold'>Registered Office</p>
                    <p className='font-thin text-sm'>124-128, City Road,</p>
                    <p className='font-thin text-sm'>London, England, EC1V 2NX</p>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
