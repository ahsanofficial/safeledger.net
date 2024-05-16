"use client"
import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, useMediaQuery } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styles from './style.module.css';

const Price: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialsPerPage = useMediaQuery('(min-width:600px)') ? 3 : 1;

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const testimonials = [
        {
            title: 'Basic',
            bgColor: 'bg-gray-50',
            textColor: 'text-gray-600',
            btnBgColor: 'bg-indigo-600',
            btnTextColor: 'text-white',
            startingFrom: '$349',
            features: [
                '* LTD Company',
                '* Digital Company Documents',
                '* London Registered Office',
                '* London Service Address',
            ],
        },
        {
            title: 'Standard',
            bgColor: 'bg-blue-color',
            textColor: 'text-white',
            btnBgColor: 'bg-white', // Change button background color to white
            btnTextColor: 'text-black',
            startingFrom: '$349',
            features: [
                '* London Registered Office',
                '* London Service Address',
                '* VAT Registration',
                '* PAYE Registration',
            ],
        },
        {
            title: 'Premium',
            bgColor: 'bg-gray-50',
            textColor: 'text-gray-600',
            btnBgColor: 'bg-indigo-600',
            btnTextColor: 'text-white',
            startingFrom: '$349',
            features: [
                '* PAYE Registration',
                '* Full Company Secretary Services',
                '* Apostilled Documents Service',
                '* Confirmation Statement',
            ],
        },
    ];

    return (
        <div className={`pt-16 ${styles.bg}`}>
            <Box style={{ margin: 'auto', padding: '16px', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom className="mb-10">
                    As Our Client Says…
                </Typography>
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '16px',
                        overflowX: 'auto',
                        justifyContent: 'space-evenly',
                    }}
                >
                    {testimonials
                        .slice(currentIndex, currentIndex + testimonialsPerPage)
                        .map((testimonial, index) => (
                            <div
                                key={index}
                                className={`slider-slide ${styles.width}`}
                            >
                                <div
                                    className={`rounded-2xl ${testimonial.bgColor} py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16`}
                                >
                                    <div className="mx-auto max-w-xs px-8">
                                        <p className={`text-base font-semibold ${testimonial.textColor}`}>
                                            {testimonial.title}
                                        </p>
                                        <p className="mt-6 items-baseline justify-center gap-x-2 text-left">
                                            <p className="text-slate-400 text-sm">
                                                Starting From
                                            </p>
                                            <span className="text-3xl font-bold tracking-tight text-rose-700">
                                                {testimonial.startingFrom}
                                            </span>
                                        </p>
                                        <button
                                            // variant="outlined"
                                            className={`mt-10 block w-full ${testimonial.btnBgColor} ${testimonial.btnTextColor} px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full`}
                                        >
                                            Inquire Now
                                        </button>
                                        <p className={`mt-6 text-xs leading-5 ${testimonial.textColor}`}>
                                            T&C Apply *
                                        </p>
                                        <ul className="text-left mt-8">
                                            {testimonial.features.map(
                                                (feature, index) => (
                                                    <li
                                                        key={index}
                                                        className="text-xs"
                                                    >
                                                        {feature}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Box>
                {testimonials.length > 1 && (
                    <div className="flex justify-center mt-4">
                        <IconButton
                            onClick={handlePrev}
                            aria-label="previous"
                        >
                            <NavigateBeforeIcon />
                        </IconButton>
                        <IconButton onClick={handleNext} aria-label="next">
                            <NavigateNextIcon />
                        </IconButton>
                    </div>
                )}
            </Box>
        </div>
    );
};

export default Price;
