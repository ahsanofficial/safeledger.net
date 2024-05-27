"use client"
import React, { useState } from 'react';
import { Box, Typography, IconButton, Avatar, Grid } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import image1 from '../../../public/landing/partner/image1.png';
import image2 from '../../../public/landing/partner/image2.png';
import image3 from '../../../public/landing/partner/image3.png';
import image4 from '../../../public/landing/partner/image4.png';
import image5 from '../../../public/landing/partner/image5.png';
import styles from './style.module.css';

const testimonials = [
    {
        id: 1,
        name: "9000+",
        message: "Clients served",
        avatarUrl: image5.src,
    },
    {
        id: 2,
        name: "10+ ",
        message: "Years industry serving",
        avatarUrl: image4.src,
    },
    {
        id: 3,
        name: " 500+",
        message: "Professionals’ network",
        avatarUrl: image3.src,
    },
    {
        id: 4,
        name: "45000",
        message: "Consultation offered",
        avatarUrl: image1.src,
    },
    {
        id: 5,
        name: "3700+",
        message: "Company Incorporated",
        avatarUrl: image2.src,
    },
    {
        id: 6,
        name: "3600+",
        message: "Company Incorporated",
        avatarUrl: image2.src,
    },
];

const Partner: React.FC = () => {
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
            <Box style={{ margin: 'auto', padding: '16px', textAlign: 'center' }}>
                <Grid container spacing={2} justifyContent="space-between">
                    {testimonials
                        .slice(currentIndex, currentIndex + testimonialsPerPage)
                        .map((testimonial) => (
                            <Grid item xs={12} sm={6} md={2} key={testimonial.id}>
                                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px', padding: '16px', borderRadius: '8px', alignContent: 'normal', justifyContent: 'center' }}>
                                    <div>
                                        <Avatar alt={testimonial.name} src={testimonial.avatarUrl} style={{ width: '64px', height: '64px', margin: 'auto' }} />
                                    </div>
                                    <div className='ml-5'>
                                        <Typography variant="h5" className='text-rose-700'>
                                            {testimonial.name}
                                        </Typography>
                                        <Typography variant="body1" style={{ marginTop: '8px', marginBottom: '8px', flex: 1 }} className='text-slate-400'>
                                            {testimonial.message}
                                        </Typography>
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

export default Partner;
