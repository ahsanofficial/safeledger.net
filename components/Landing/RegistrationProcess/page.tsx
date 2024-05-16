import React from 'react';
import styles from './style.module.css';
import { Grid, IconButton, Typography } from '@mui/material';
import image1 from '../../../public/landing/RegistrationProcess/image-2.png';
import image2 from '../../../public/landing/RegistrationProcess/image-3.png';

const RegistrationProcess = () => {


    return (
        <div>
            <div className={`${styles.Backgound}`}>
                <div className={`${styles.flex}`}>
                    <Grid item xs={12} sm={6}>
                        {/* <div className={styles.card}>
                            <Typography>Registration Process</Typography>
                        </div> */}
                        <div className="flex justify-center items-center" >
                            <div className={styles.circle}>
                                <div className="flex flex-col ">
                                    <Typography className='sm:text-3xl text-blue-600 font-extrabold text-3xl text-center' >Registration Process</Typography>
                                    <Typography className='text-black text-center'>Quick and seamless registration process offering customers premium experience</Typography>
                                </div>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={`${styles.image1}`}>
                            <img src={image1.src} className={`${styles.size}`}/>
                        </div>
                        <div className={`${styles.image2}`}>
                            <img src={image2.src} className={`${styles.size}`}/>
                        </div>
                    </Grid>
                </div>
            </div>
        </div>

    )
}
export default RegistrationProcess;