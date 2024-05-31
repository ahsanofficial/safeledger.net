"use client";
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    IconButton,
    useMediaQuery
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styles from './style.module.css';

interface Testimonial {
    title: string;
    bgColor: string;
    midBgColor: string;
    textColor: string;
    midTextColor: string;
    btnBgColor: string;
    btnTextColor: string;
    startingFrom: string;
    features: string[];
}

const Price: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const isLargeScreen = useMediaQuery('(min-width:600px)');
    const testimonialsPerPage = isLargeScreen ? 3 : 1;

    const testimonials: Testimonial[] = [
        {
            title: 'Basic',
            bgColor: 'bg-gray-50',
            midBgColor: 'bg-blue-color',
            textColor: 'text-gray-600',
            midTextColor: 'text-white',
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
            bgColor: 'bg-gray-50',
            midBgColor: 'bg-blue-color',
            textColor: 'text-gray-600',
            midTextColor: 'text-white',
            btnBgColor: 'bg-indigo-600',
            btnTextColor: 'text-white',
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
            midBgColor: 'bg-blue-color',
            textColor: 'text-gray-600',
            midTextColor: 'text-white',
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
        // {
        //     title: 'Deluxe',
        //     bgColor: 'bg-gray-50',
        //     midBgColor: 'bg-blue-color',
        //     textColor: 'text-gray-600',
        //     midTextColor: 'text-white',
        //     btnBgColor: 'bg-indigo-600',
        //     btnTextColor: 'text-white',
        //     startingFrom: '$499',
        //     features: [
        //         '* Full Company Secretary Services',
        //         '* Apostilled Documents Service',
        //         '* Confirmation Statement',
        //         '* Business Bank Account',
        //     ],
        // }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % testimonials.length
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    const getDisplayedTestimonials = () => {
        const endIndex = currentIndex + testimonialsPerPage;
        if (endIndex > testimonials.length) {
            return [
                ...testimonials.slice(currentIndex, testimonials.length),
                ...testimonials.slice(0, endIndex - testimonials.length)
            ];
        }
        return testimonials.slice(currentIndex, endIndex);
    };

    const displayedTestimonials = getDisplayedTestimonials();
    const middleIndex = Math.floor(testimonialsPerPage / 2);

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
                    {displayedTestimonials.map((testimonial, index) => {
                        const isMiddle = index === middleIndex;
                        return (
                            <div
                                key={index}
                                className={`slider-slide ${styles.width}`}
                            >
                                <div
                                    className={`rounded-2xl ${isMiddle ? testimonial.midBgColor : testimonial.bgColor} py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16`}
                                >
                                    <div className={`mx-auto max-w-xs px-8 ${styles.price}`}>
                                        <Typography
                                            variant="body1"
                                            className={`text-base font-semibold ${isMiddle ? testimonial.midTextColor : testimonial.textColor}`}
                                        >
                                            {testimonial.title}
                                        </Typography>
                                        <div className="mt-6 items-baseline justify-center gap-x-2 text-left">
                                            <Typography variant="body2" className={`text-slate-400 text-sm ${isMiddle ? testimonial.midTextColor : testimonial.textColor}`}>
                                                Starting From
                                            </Typography>
                                            <span className="text-3xl font-bold tracking-tight text-rose-700">
                                                {testimonial.startingFrom}
                                            </span>
                                        </div>
                                        <Button
                                            variant="contained"
                                            className={`mt-10 block w-full ${testimonial.btnBgColor} ${testimonial.btnTextColor} px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full`}
                                        >
                                            Inquire Now
                                        </Button>
                                        <Typography
                                            variant="body2"
                                            className={`mt-6 text-xs leading-5 ${isMiddle ? 'text-white' : testimonial.textColor}`}
                                        >
                                            T&C Apply *
                                        </Typography>
                                        <ul className={`text-left mt-8 ${isMiddle ? 'text-white' : testimonial.textColor}`}>
                                            {testimonial.features.map(
                                                (feature, idx) => (
                                                    <li key={idx} className="text-xs">
                                                        {feature}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Box>
                {testimonials.length > testimonialsPerPage && (
                    <div className="flex justify-center mt-4">
                        <IconButton onClick={handlePrev} aria-label="previous">
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
