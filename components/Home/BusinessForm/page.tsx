import React from 'react';
import styles from './style.module.css';
import { Container } from 'postcss';
import { Button, Grid, TextField } from '@mui/material';
import ZohoFormService from '@/components/Form/ZohoForm';

const BusinessForm = () => {


    return (
        <div className={`flex ${styles.bg} grid sm:grid-cols-2 lg:grid-cols-2 items-center	`}>
            <div className={`${styles.top} sm:mt-0 lg:mt-0 mt-6 sm:ml-0 lg:ml-0 ml-4`}>
                <h2 className="sm:text-4xl text-blue-600 font-extrabold text-3xl w-3/5">Start your Business Today</h2>
                <p className='sm:pr-6 mg:pr-6 mt-'>Speak with a SafeLedger specialist today to ensure compliance, efficiency, and growth as you navigate every stage of your company's journey. Together, let's turn your business goals into reality. </p>
            </div>
            <div>
                {/* <form noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="name"
                                label="Name"
                                variant="outlined"
                                fullWidth
                                className='rounded-3xl	'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="phone"
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" className='mt-6 bg-indigo-700 text-white rounded-full	' fullWidth>
                        Submit
                    </Button>
                    <span className='text-xs text-slate-500	'>By clicking, you agree to our Terms & Conditions , Privacy and Data Protection Policy</span>
                </form> */}
                <div className='pt-4 bg-indigo-700 mb-8 sm:mt-0 lg:mt-0 mt-8'>
                    <ZohoFormService service={''} />
                </div>
            </div>
        </div>
    )
}
export default BusinessForm;