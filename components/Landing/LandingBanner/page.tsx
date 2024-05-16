"use client"
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import image1 from '../../../public/landing/landingbanner/image1.png';
import image2 from '../../../public/landing/landingbanner/image3.png';
import image3 from '../../../public/landing/landingbanner/image4.png';
import image4 from '../../../public/landing/landingbanner/image5.png';
import image5 from '../../../public/landing/landingbanner/image6.png';
import Rating from '@mui/material/Rating';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ZohoFormService from '@/components/Form/ZohoForm';
import { MessageOutlined, CameraAltOutlined, WhatsApp, Phone } from '@mui/icons-material';

const HeroSection: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState<boolean>(true);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const apps = [
        { name: 'Messaging', icon: <MessageOutlined /> },
        { name: 'Camera', icon: <CameraAltOutlined /> },
    ];

    const customIcon = (
        <StarBorderIcon fontSize="inherit" style={{ color: 'yellow' }} />
    );
    const customSelectedIcon = (
        <StarIcon fontSize="inherit" style={{ color: 'yellow' }} />
    );

    return (
        <div className={styles.Backgound}>
            <Grid container spacing={3} className='items-center justify-center'>
                <div className={` ${styles.response}`}>
                    <Grid item xs={12} sm={6} md={3} className={` ${styles.banner}`}>
                        <img src={image1.src} className={` ${styles.img}`} alt="Banner" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={isDesktop ? 5 : 12}>
                        <div className={styles.textContainer}>
                            <Typography variant="h4" gutterBottom className={`text-white text-5xl font-bold ${styles.text}`}>
                                Incorporate your company in the United Kingdom with <span className='text-red-700'> Safe Ledger</span>
                            </Typography>
                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${styles.grid}`}>
                                <div className='justify-center flex items-center text-blue-600 border-solid border-2 border-sky-500 rounded-full'>
                                    <IconButton disableRipple className="icon">
                                        <img src={image5.src} className={`${styles.image}`} alt="Icon" />
                                    </IconButton>
                                    <Typography variant="body1" className="font-extralight text-lg text-white">Bank Account Opening</Typography>
                                </div>
                                <div className='justify-center flex items-center text-blue-600 border-solid border-2 border-sky-500 rounded-full'>
                                    <IconButton disableRipple className="icon">
                                        <img src={image3.src} className={`${styles.image}`} alt="Icon" />
                                    </IconButton>
                                    <Typography variant="body1" className="font-extralight text-lg text-white">AoA & MoA Drafting</Typography>
                                </div>
                                <div className='justify-center flex items-center text-blue-600 border-solid border-2 border-sky-500 rounded-full'>
                                    <IconButton disableRipple className="icon">
                                        <img src={image4.src} className={`${styles.image}`} alt="Icon" />
                                    </IconButton>
                                    <Typography variant="body1" className="font-extralight text-lg text-white">Business Setup</Typography>
                                </div>
                                <div className='justify-center flex items-center text-blue-600 border-solid border-2 border-sky-500 rounded-full'>
                                    <IconButton disableRipple className="icon">
                                        <img src={image2.src} className={`${styles.image}`} alt="Icon" />
                                    </IconButton>
                                    <Typography variant="body1" className="font-extralight text-lg text-white">Virtual Office</Typography>
                                </div>
                            </div>
                            <div className='flex items-center mt-6'>
                                <Typography variant="body1" className={`text-2xl text-white mr-6 ${styles.excellent}`} >Excellent</Typography>
                                <Rating
                                    name="customized-empty"
                                    defaultValue={4}
                                    precision={1}
                                    emptyIcon={customIcon}
                                    icon={customSelectedIcon}
                                    className={`${styles.excellent}`}
                                />
                                <Typography className={`ml-6 text-sm text-white ${styles.review}`}>Based on <span className='text-red-700'>51,789 reviews</span></Typography>
                            </div>
                        </div>
                    </Grid>

                    {isDesktop && (
                        <Grid item xs={12} sm={12} md={3} className={`bg-indigo-700 rounded-3xl m-auto ${styles.margin}`}>
                            <div className={styles.formContainer}>
                                <Typography variant="h6" gutterBottom className='text-white text-3xl text-center'>
                                    Let’s talk with us!
                                </Typography>
                                <p className='text-white text-center mb-6'>If you have any questions, connect with us.</p>
                                <ZohoFormService service={''} />
                            </div>
                        </Grid>
                    )}
                </div>

                {!isDesktop && (
                    <Grid item xs={12} sm={12} md={12} className={`bg-indigo-700 rounded-3xl m-auto mt-10 ${styles.margin}`}>
                        <div className={styles.formContainer}>
                            <Typography variant="h6" gutterBottom className='text-white text-3xl text-center'>
                                Let’s talk with us!
                            </Typography>
                            <p className='text-white text-center mb-6'>If you have any questions, connect with us.</p>
                            <ZohoFormService service={''} />
                        </div>
                    </Grid>
                )}
            </Grid>
            <div className={`${styles.border}`}></div>
        </div>
    );
};

export default HeroSection;
