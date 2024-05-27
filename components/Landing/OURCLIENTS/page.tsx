"use client"
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import { Grid, IconButton, Hidden, Typography } from '@mui/material';
import disney from '../../../public/landing/client/disney.png';
import mac from '../../../public/landing/client/mac.png';
import netflix from '../../../public/landing/client/netflex.png';
import prime from '../../../public/landing/client/peime.png';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

interface Slide {
    id: number;
    src: string;
}

const Client: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isMobileView, setIsMobileView] = useState<boolean>(false);
    const [visibleSlides, setVisibleSlides] = useState<Slide[]>([]);

    const slides: Slide[] = [
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

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobileView) {
            setVisibleSlides(slides.slice(currentSlide, currentSlide + numVisibleSlides));
        } else {
            setVisibleSlides(slides);
        }
    }, [currentSlide, isMobileView]);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % numSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + numSlides) % numSlides);
    };

    return (
        <div className={`pt-16 ${styles.bg}`}>
            <Typography className='text-3xl	text-center mb-6'>OUR CLIENTS</Typography>
            <Grid container spacing={3} className='items-center justify-center '>
                {visibleSlides.map(slide => (
                    <Grid key={slide.id} item xs={isMobileView ? 4 : 3}>
                        <div className='flex justify-center content-normal'>
                            <img src={slide.src} className={`${styles.image}`} alt="slide" />
                        </div>
                    </Grid>
                ))}
            </Grid>
            {isMobileView && (
                <div className='flex justify-center'>
                    <IconButton onClick={prevSlide} aria-label="Previous">
                        <NavigateBefore />
                    </IconButton>
                    <IconButton onClick={nextSlide} aria-label="Next">
                        <NavigateNext />
                    </IconButton>
                </div>
            )}
        </div>
    );
};

export default Client;

