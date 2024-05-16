import React from 'react';
import styles from './style.module.css';
import { Grid, IconButton, Typography } from '@mui/material';

const RegistrationProcess = () => {


    return (
        <div>
            <div className={`${styles.Backgound}`}>
                <div className='flex'>
                    <Grid item xs={12} sm={6}>
                        {/* <div className={styles.card}>
                            <Typography>Registration Process</Typography>
                        </div> */}
                        <div className="flex justify-center items-center h-screen">
                            <div className={styles.circle}>
                                <div className="flex flex-col">
                                    <Typography className='sm:text-3xl text-blue-600 font-extrabold text-3xl text-center' >Registration Process</Typography>
                                    <Typography className='text-black text-center'>Quick and seamless registration process offering customers premium experience</Typography>
                                </div>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div>
                            <Typography></Typography>
                        </div>
                    </Grid>
                </div>
            </div>
        </div>

    )
}
export default RegistrationProcess;