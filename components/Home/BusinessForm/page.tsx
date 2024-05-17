import React from 'react';
import styles from './style.module.css';
import { Container } from 'postcss';
import { Button, Grid, TextField } from '@mui/material';

const BusinessForm = () => {


    return (
        <div className={`flex pt-6 ${styles.bg} grid sm:grid-cols-2 lg:grid-cols-2`}>
            <div className={`${styles.top} `}>
                <h2 className="sm:text-4xl text-blue-600 font-extrabold text-3xl w-3/5">Start your Business Today</h2>
                <p className='sm:pr-6 mg:pr-6 mt-10'>Speak with a SafeLedger specialist today to ensure compliance, efficiency, and growth as you navigate every stage of your company&apos;s journey. Together, let&apos;s turn your business goals into reality. </p>
            </div>
            <div>
                <form noValidate autoComplete="off">
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
                </form>
            </div>
        </div>
    )
}
export default BusinessForm;