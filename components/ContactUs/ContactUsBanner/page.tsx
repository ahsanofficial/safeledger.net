import React from 'react';
import styles from './style.module.css';
import { Button, Grid, TextField, Typography } from '@mui/material';
import ZohoFormService from '@/components/Form/ZohoForm';


const ContactUsBanner: React.FC = () => {

    return (
        <div className={styles.Backgound}>
            <Grid container spacing={3} className='items-center justify-center'>
                <Grid item xs={12} sm={5}>
                    <div className={styles.textContainer}>
                        <Typography variant="h4" gutterBottom className={`${styles.ctext} text-6xl font-bold`}>
                            Contact Us
                            <Button variant="contained" className={` ${styles.cbtn} hover:text-white px-8 py-2 rounded-xl mt-60`}>+91 84477 46183</Button>
                        </Typography>
                    </div>
                </Grid>
                <div className={`bg-indigo-700 p-4	rounded-3xl ${styles.margin}`}>
                    <div className={`${styles.formContainer}`}>
                        <Typography variant="h6" gutterBottom className='text-white	text-3xl text-center'>
                            Let’s talk with us!
                        </Typography>
                        <p className='text-white text-center mb-6'>If you have any questions, connect us.</p>
                        <ZohoFormService service={''} />
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default ContactUsBanner;
