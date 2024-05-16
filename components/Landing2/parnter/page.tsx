// import { Grid, Paper, Typography } from '@mui/material';
// import React from 'react';
// import image1 from '../../../public/landing/partner/image1.png';
// import image2 from '../../../public/landing/partner/image2.png';
// import image3 from '../../../public/landing/partner/image3.png';
// import image4 from '../../../public/landing/partner/image4.png';
// import image5 from '../../../public/landing/partner/image5.png';
// import styles from './style.module.css';

// const Partner = () => {


//     return (
//         <div className={`flex justify-evenly pt-16 ${styles.bg}`} >
//             <div className='flex items-center'>
//                 <img src={image5.src} className={` ${styles.image}`} />
//                 <div className='ml-6'>
//                     <Typography variant="h5" gutterBottom className='text-rose-700	'>
//                         9000+
//                     </Typography>
//                     <Typography variant="body1" gutterBottom className='text-slate-400'>
//                         Clients served
//                     </Typography>
//                 </div>
//             </div>
//             <div className='flex items-center'>
//                 <img src={image4.src} className={` ${styles.image}`} />
//                 <div className='ml-6'>
//                     <Typography variant="h5" gutterBottom className='text-rose-700	'>
//                     10+                   
//                      </Typography>
//                     <Typography variant="body1" gutterBottom className='text-slate-400'>
//                     Years industry serving
//                     </Typography>
//                 </div>
//             </div>

//             <div className='flex items-center'>
//                 <img src={image3.src} className={` ${styles.image}`} />
//                 <div className='ml-6'>
//                     <Typography variant="h5" gutterBottom className='text-rose-700	'>
//                         500+
//                     </Typography>
//                     <Typography variant="body1" gutterBottom className='text-slate-400'>
//                     Professionals’ network
//                     </Typography>
//                 </div>
//             </div>

//             <div className='flex items-center'>
//                 <img src={image1.src} className={` ${styles.image}`} />
//                 <div className='ml-6'>
//                     <Typography variant="h5" gutterBottom className='text-rose-700	'>
//                         45000+
//                     </Typography>
//                     <Typography variant="body1" gutterBottom className='text-slate-400'>
//                     Consultation offered
//                     </Typography>
//                 </div>
//             </div>

//             <div className='flex items-center'>
//                 <img src={image2.src} className={` ${styles.image}`} />
//                 <div className='ml-6'>
//                     <Typography variant="h5" gutterBottom className='text-rose-700	'>
//                         3600+
//                     </Typography>
//                     <Typography variant="body1" gutterBottom className='text-slate-400'>
//                     Company Incorporated
//                     </Typography>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Partner;

"use client"
import React, { useState } from 'react';
import { Box, Typography, IconButton, Avatar } from '@mui/material';
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
        name: "3600+",
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
    const testimonialsPerPage = 5;
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    return (<div className={`flex justify-evenly pt-10 ${styles.bg}`} >
        <Box style={{ margin: 'auto', padding: '16px', textAlign: 'center' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>  
                {testimonials
                    .slice(currentIndex * testimonialsPerPage, (currentIndex + 1) * testimonialsPerPage)
                    .map((testimonial) => (
                        <Box key={testimonial.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
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
                    ))}
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '16px' }}>
                <IconButton onClick={prevTestimonial}>
                    <NavigateBeforeIcon />
                </IconButton>
                {/* {[...Array(totalPages)].map((_, index) => (
                    <span
                        key={index}
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: index === currentIndex ? '#000' : '#ccc',
                            display: 'inline-block',
                            margin: '0 4px',
                            cursor: 'pointer',
                        }}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))} */}
                <IconButton onClick={nextTestimonial}>
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </Box>
    </div>

    );
};

export default Partner;

