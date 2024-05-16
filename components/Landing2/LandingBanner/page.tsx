import React from 'react';
import styles from './style.module.css';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import image1 from '../../../public/landing/landingbanner/image1.png';
import image2 from '../../../public/landing/landingbanner/image3.png';
import image3 from '../../../public/landing/landingbanner/image4.png';
import image4 from '../../../public/landing/landingbanner/image5.png';
import image5 from '../../../public/landing/landingbanner/image6.png';
import Rating from '@mui/material/Rating';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ZohoFormService from '@/components/Form/ZohoForm';


const HeroSection: React.FC = () => {
    const customIcon = (
        <StarBorderIcon fontSize="inherit" style={{ color: 'yellow' }} />
    );
    const customSelectedIcon = (
        <StarIcon fontSize="inherit" style={{ color: 'yellow' }} />
    );

    return (
        <div className={styles.Backgound}>
            <Grid container spacing={3} className='items-center justify-center'>
                <Grid item xs={12} sm={3}>
                    <img src={image1.src} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <div className={styles.textContainer}>
                        <Typography variant="h4" gutterBottom className='text-white	text-5xl font-bold	'>
                            Incorporate your companyn United Kingdom with <span className='text-red-700'> Safe Ledger</span>
                        </Typography>
                        <div className='flex justify-evenly	gap-4'>
                            <div className='justify-center flex items-center text-blue-600 border-solid border-2 border-sky-500 rounded-full w-2/4'>
                                <IconButton disableRipple className="icon">
                                    <img src={image5.src} className={` ${styles.image}`} />
                                </IconButton>
                                <Typography variant="body1" className="font-extralight text-lg text-white">Bank Account Opening Opening</Typography>
                            </div>
                            <div className='justify-center flex items-center text-blue-600 border-solid border-2 border-sky-500 rounded-full pt-4 pb-4 w-2/4 text-center'>
                                <IconButton disableRipple className="icon">
                                    <img src={image3.src} className={` ${styles.image}`} />
                                </IconButton>
                                <Typography variant="body1" className="font-extralight text-lg text-white">AoA & MoA Drafting</Typography>
                            </div>
                        </div>
                        <div className='flex justify-evenly	mt-10 gap-4'>
                            <div className='justify-center flex items-center text-blue-600 border-solid border-2 border-sky-500 rounded-full p-4 w-2/4'>
                                <IconButton disableRipple className="icon">
                                    <img src={image4.src} className={` ${styles.image}`} />
                                </IconButton>
                                <Typography variant="body1" className="font-extralight text-lg text-white">Business Setup </Typography>
                            </div>
                            <div className='justify-center flex items-center text-blue-600 border-solid border-2 border-sky-500 rounded-full p-4 w-2/4'>
                                <IconButton disableRipple className="icon">
                                    <img src={image2.src} className={` ${styles.image}`} />
                                </IconButton>
                                <Typography variant="body1" className="font-extralight text-lg text-white">Virtual Office</Typography>
                            </div>
                        </div>
                        <div className='flex items-center mt-6'>
                            <Typography variant="body1" className="text-2xl	text-white mr-6">Excellent</Typography>
                            <Rating
                                name="customized-empty"
                                defaultValue={4}
                                precision={1}
                                emptyIcon={customIcon}
                                icon={customSelectedIcon}
                            />
                            <Typography className="ml-6 text-sm	text-white ">Based on <span className='text-red-700	'> 51,789 reviews</span> </Typography>
                        </div>

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

export default HeroSection;
