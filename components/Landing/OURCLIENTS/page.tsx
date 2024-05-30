"use client"
import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
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
    const testimonialsPerPage = 5;

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex + 1 < testimonials.length) {
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                setCurrentIndex(0);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);
    const additionalTestimonials = testimonials.slice(0, Math.max(testimonialsPerPage - visibleTestimonials.length, 0));

    return (
        <div className={`pt-10 ${styles.bg}`}>
            <Typography className='text-3xl text-center mb-6'>OUR CLIENTS</Typography>
            <Box style={{ margin: 'auto', padding: '16px', textAlign: 'center' }}>
                <Grid container spacing={2} justifyContent="space-between">
                    {[...visibleTestimonials, ...additionalTestimonials].map((testimonial, index) => (
                        <Grid item xs={12} sm={6} md={2} key={testimonial.id}>
                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px', padding: '16px', borderRadius: '8px', alignContent: 'normal', justifyContent: 'center' }}>
                                <div>
                                    <Avatar src={testimonial.avatarUrl} style={{ width: '100px', height: 'auto', margin: 'auto' }} />
                                </div>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default Client;
