import React from 'react';
import styles from './style.module.css';
import { Button, Grid, TextField, Typography } from '@mui/material';
import ZohoFormService from '@/components/Form/ZohoForm';
interface ServiceBannerProps {
    Data: any;
  }
const ServiceBanner: React.FC<ServiceBannerProps> = ({ Data }) => {

    return (
        <div className={styles.Backgound}>
            <Grid container spacing={3} className='items-center justify-center'>
                <Grid item xs={12} sm={5} >
                    <div className={`${styles.textContainer}`}>
                        <Typography variant="h4" gutterBottom className='text-5xl font-bold	'>
                            {Data.Title}
                        </Typography>
                        <p>Author: {Data.Author}</p>
                        <p>Keywords: {Data.Keywords}</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3} className={`bg-indigo-700	rounded-3xl ${styles.margin}`}>
                    <div className={styles.formContainer}>
                        <Typography variant="h6" gutterBottom className='text-white	text-3xl text-center'>
                            Let’s talk with us!
                        </Typography>
                        <p className='text-white text-center mb-6'>If you have any questions, connect us.</p>
                        <ZohoFormService service={''} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default ServiceBanner;
