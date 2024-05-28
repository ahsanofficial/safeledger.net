// import React from "react";
// import {
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import styles from "./style.module.css";
// import image1 from "../../../public/home/partners/image1.jpeg";
// import left from "../../../public/landing2/landingmission/Vector.png";
// import right from "../../../public/landing2/landingmission/Vector (1).png";
// import Image from "next/image";

// export const Landing2Mission = () => {
//   return (
//     <div>
//       <div className={`pt-16 ${styles.bg}`}>
//         <div className="py-10 sm:px-80 lg:px-80 px-4">
//           {" "}
//           <h1 className="text-black text-4xl text-center">
//             Our mission is to enable entrepreneurs to
//             <strong className="text-blue-600 font-normal">
//               &nbsp;accelerate positive changes
//             </strong>{" "}
//           </h1>
//         </div>

//         {/* <h1 className="text-indigo-600 text-3xl text-center mb-6 mt-2">
//           SafeLedger?
//         </h1> */}
//         <Grid container spacing={10}>
//           <div className="flex items-center">
//             <Image src={left} alt="Previous Card" />
//           </div>

//           <Grid item xs={12} sm={6} md={4}>
//             <Card className="bg-slate-600 shadow-md rounded-xl">
//               <img
//                 src={image1.src}
//                 alt="Card 1"
//                 className="w-full h-72 object-cover rounded-t-lg"
//               />
//               <CardContent className={styles.background}>
//                 <Typography variant="h6" gutterBottom className="text-white">
//                   Building a better future for the entrepreneurs
//                 </Typography>
//                 <ul className="list-disc p-1 px-7 pb-2 pl-4.5 mb-2.5 mx-auto">
//                   <li className="text-white mx-auto mb-2.5 ">
//                     We believe that in years entrepreneurs.
//                   </li>
//                   <li className="text-white mx-auto mb-2.5 ">
//                     Will know that administrative routine.
//                   </li>
//                   <li className="text-white mx-auto mb-2.5 ">
//                     Will know that administrative routine.
//                   </li>
//                 </ul>
//                 <div className="text-right">
//                   <Button
//                     variant="outlined"
//                     className="mt-5 rounded-full	border-slate-50	text-white "
//                   >
//                     Learn More
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card className="bg-slate-600 shadow-md rounded-xl">
//               <img
//                 src={image1.src}
//                 alt="Card 1"
//                 className="w-full h-72 object-cover rounded-t-lg"
//               />
//               <CardContent className={styles.background}>
//                 <Typography variant="h6" gutterBottom className="text-white">
//                   Keeping transparency as a key-valueF
//                 </Typography>
// <ul className="list-disc p-1 px-7 pb-6 pl-4.5 mb-2.5 mx-auto">
//   <li className="text-white mx-auto mb-2.5 ">
//     We believe that in years entrepreneurs.
//   </li>
//   <li className="text-white mx-auto mb-2.5 ">
//     Will know that administrative routine.
//   </li>
//   <li className="text-white mx-auto mb-2.5 ">
//     Will know that administrative routine.
//   </li>
// </ul>
//                 <div className="text-right">
//                   <Button
//                     variant="outlined"
//                     className="rounded-full	border-slate-50	text-white "
//                   >
//                     Learn More
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>

//           <div className="flex items-center ms-16">
//             <Image src={right} alt="Next Card" />
//           </div>
//         </Grid>
//       </div>
//     </div>
//   );
// };


"use client"
import { Avatar, Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import styles from './style.module.css';
import image1 from "../../../public/home/partners/image1.jpeg";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const testimonials = [
  {
    id: 1,
    name: "Building a better future for the entrepreneurs",
    message: "",
    avatarUrl: image1.src,
    list: [
      "We believe that in years entrepreneurs.",
      "Will know that administrative routine.",
      "Will know that administrative routine."
    ]
  },
  {
    id: 2,
    name: "Keeping transparency as a key-value",
    avatarUrl: image1.src,
    list: [
      "We believe that in years entrepreneurs.",
      "Will know that administrative routine..",
      "Will know that administrative routine."
    ]
  },
  {
    id: 3,
    name: "Building a better future for the entrepreneurs",
    avatarUrl: image1.src,
    list: [
      "We believe that in years entrepreneurs.",
      "Will know that administrative routine..",
      "Will know that administrative routine."
    ]
  },
  {
    id: 4,
    name: "Keeping transparency as a key-value",
    avatarUrl: image1.src,
    list: [
      "We believe that in years entrepreneurs.",
      "Will know that administrative routine..",
      "Will know that administrative routine."
    ]
  },
  {
    id: 5,
    name: "Building a better future for the entrepreneurs",
    avatarUrl: image1.src,
    list: [
      "We believe that in years entrepreneurs.",
      "Will know that administrative routine..",
      "Will know that administrative routine."
    ]
  },
  {
    id: 6,
    name: "Keeping transparency as a key-value",
    avatarUrl: image1.src,
    list: [
      "We believe that in years entrepreneurs.",
      "Will know that administrative routine..",
      "Will know that administrative routine."
    ]
  },
];

const Landing2Mission = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useMediaQuery('(min-width:600px)');
  const testimonialsPerPage = isDesktop ? 2 : 1;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const disablePrevButton = currentIndex === 0;
  const disableNextButton = currentIndex === testimonials.length - testimonialsPerPage;

  const truncateText = (text: string, maxWords: number): string => {
    const words = text.trim().split(/\s+/);
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
  };

  return (
    <div className={`pb-5 ${styles.bg}`}>
      <p className='text-xl text-center pt-10'>Quick Guide to Services <span className='text-indigo-600'>We Offer</span></p>
      <Box sx={{ position: 'relative', marginBottom: '16px', marginTop: '25px' }}>
        <IconButton sx={{
          position: 'absolute', left: '8%', top: '50%', transform: 'translateY(-50%)', transition: 'transform 0.3s ease-in-out',
          '@media screen and (max-width: 768px)': {
            left: '0%',
          }
        }}
          onClick={prevTestimonial}
          disabled={disablePrevButton}
        >
          <NavigateBeforeIcon />
        </IconButton>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-evenly', gap: '16px', overflowX: 'auto', transition: 'transform 0.3s ease-in-out' }}>
          {testimonials.slice(currentIndex, currentIndex + testimonialsPerPage)
            .map((testimonial) => (
              <Box key={testimonial.id} sx={{ maxWidth: 300, minWidth: 250, marginBottom: '16px', border: '1px solid #ccc', borderRadius: '15px', transition: 'transform 0.3s ease-in-out' }}>
                <div className={`${styles.redius}`}>
                  <Avatar alt={testimonial.name} src={testimonial.avatarUrl} className={`${styles.border}`}/>
                  <div style={{ padding: '16px' }} className={`${styles.background}`}>
                    <Typography variant="subtitle1" className='sm:text-3xl text-blue-600 text-3xl text-white'>
                      {testimonial.name}
                    </Typography>
                    <ul className="list-disc p-1 px-7 pl-4.5 mb-2.5 mx-auto mt-5">
                      {testimonial.list?.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-white mx-auto">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-around items-center border border-white-500 rounded-full">
                      <p className="text-white">Learn More</p>
                      <div>
                        <IconButton>
                          <ArrowCircleRightIcon className='text-white' />
                        </IconButton>
                      </div>
                    </div>
                  </div>

                </div>
              </Box>
            ))}
        </Box>
        <IconButton sx={{
          position: 'absolute', right: '8%', top: '50%', transform: 'translateY(-50%)', transition: 'transform 0.3s ease-in-out',
          '@media screen and (max-width: 768px)': {
            right: '0%',
          }
        }}
          onClick={nextTestimonial} disabled={disableNextButton}>
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default Landing2Mission;
