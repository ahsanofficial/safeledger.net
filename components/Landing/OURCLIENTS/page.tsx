"use client"
import React, { useState } from 'react';
import styles from './style.module.css';
import { Grid, IconButton, Hidden } from '@mui/material';
import disney from '../../../public/landing/client/disney.png';
import mac from '../../../public/landing/client/mac.png';
import netflix from '../../../public/landing/client/netflex.png';
import prime from '../../../public/landing/client/peime.png';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

const Client = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 0, src: netflix.src },
        { id: 1, src: disney.src },
        { id: 2, src: prime.src },
        { id: 3, src: prime.src },
        { id: 4, src: mac.src },
        { id: 5, src: mac.src },
        { id: 6, src: mac.src },
    ];

    const numVisibleSlides = 3;
    const numSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % numSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + numSlides) % numSlides);
    };

    const isMobileView = window.innerWidth < 768; // Assuming mobile view width is less than 768px

    const visibleSlides = slides.slice(currentSlide, currentSlide + numVisibleSlides);

    return (
        <div className={`pt-16 ${styles.bg}`}>
            <Grid container spacing={3} className='items-center justify-center'>
                {isMobileView ? (
                    visibleSlides.map(slide => (
                        <Grid key={slide.id} item xs={4}>
                            <img src={slide.src} className={`${styles.image}`} alt="slide" />
                        </Grid>
                    ))
                ) : (
                    slides.map(slide => (
                        <Grid key={slide.id} item xs={3}>
                            <div className='flex justify-center'>
                                <img src={slide.src} className={`${styles.image}`} alt="slide" />
                            </div>
                        </Grid>
                    ))
                )}
            </Grid>
            <div className='flex justify-center'>
                <Hidden mdUp>
                    <IconButton onClick={prevSlide} aria-label="Previous">
                        <NavigateBefore />
                    </IconButton>
                    <IconButton onClick={nextSlide} aria-label="Next">
                        <NavigateNext />
                    </IconButton>
                </Hidden>
            </div>
        </div>
    );
};

export default Client;
