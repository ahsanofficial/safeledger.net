"use client"

import React, { useState } from 'react';
import { Box, Typography, IconButton, Avatar, Grid } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import image1 from '../../../public/landing/client/oyo.webp';
import image2 from '../../../public/landing/client/myoperator.webp';
import image3 from '../../../public/landing/client/hsbc.webp';
import image4 from '../../../public/landing/client/hdfc.webp';
import image5 from '../../../public/landing/client/aws.webp';
import image6 from '../../../public/landing/client/yesbank.webp';
import image7 from '../../../public/landing/client/zoho.webp';
import styles from './style.module.css';

const testimonials = [
    {
        id: 1,
        avatarUrl: image1.src,
    },
    {
        id: 2,
        avatarUrl: image2.src,
    },
    {
        id: 3,
        avatarUrl: image3.src,
    },
    {
        id: 4,
        avatarUrl: image4.src,
    },
    {
        id: 5,
        avatarUrl: image5.src,
    },
    {
        id: 6,
        avatarUrl: image6.src,
    },
    {
        id: 7,
        avatarUrl: image7.src,
    },
];

const Client: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const testimonialsPerPage = isMobile ? 1 : 5;

    const nextTestimonial = () => {
        if (currentIndex + testimonialsPerPage < testimonials.length) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const prevTestimonial = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 600);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`pt-10 ${styles.bg}`}>
            <Typography className='text-3xl	text-center mb-6'>OUR CLIENTS</Typography>
            <Box style={{ margin: 'auto', padding: '16px', textAlign: 'center' }}>
                <Grid container spacing={2} justifyContent="space-between">
                    {testimonials
                        .slice(currentIndex, currentIndex + testimonialsPerPage)
                        .map((testimonial) => (
                            <Grid item xs={12} sm={6} md={2} key={testimonial.id}>
                                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px', padding: '16px', borderRadius: '8px', alignContent: 'normal', justifyContent: 'center' }}>
                                    <div>
                                        <Avatar src={testimonial.avatarUrl} style={{ width: '100px', height: 'auto', margin: 'auto' }} />
                                    </div>
                                </Box>
                            </Grid>
                        ))}
                </Grid>
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '16px' }}>
                    <IconButton onClick={prevTestimonial} disabled={currentIndex === 0}>
                        <NavigateBeforeIcon />
                    </IconButton>
                    <IconButton onClick={nextTestimonial} disabled={currentIndex + testimonialsPerPage >= testimonials.length}>
                        <NavigateNextIcon />
                    </IconButton>
                </Box>
            </Box>
        </div>
    );
};

export default Client;
