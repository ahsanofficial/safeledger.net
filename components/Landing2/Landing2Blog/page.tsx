import { Button, Card, CardContent, Grid, IconButton, Typography } from "@mui/material"
import React from 'react';
import styles from './style.module.css';
import image1 from '../../../public/home/blog/image1.jpeg';
import image2 from '../../../public/home/blog/image2.jpeg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from "next/image"


export const Landing2Blog = () => {
  return (
    <div className="sm:pb-0">
    <div className={styles.back}>
        <div className='pt-6 pb-10 lg:mr-16 text-center'>
            <h2 className="sm:text-4xl text-indigo-800	 font-extrabold text-3xl">Get to know Osome better with our blog</h2>
        </div>
        <div className={` ${styles.width} pb-16`}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="bg-slate-600 shadow-md rounded-xl">
                        <img src={image1.src} alt="Card 1" className="w-full h-48 object-cover opacity-100	" />
                        <CardContent className={styles.background}>
                            <Typography variant="h6" gutterBottom className='text-indigo-800 font-bold pr-16'>
                                Osome Partners With UK’s Entrepreneur Guru, Simon Squibb
                            </Typography>
                            <Typography variant="body2" className='text-indigo-800 pr-16'>
                                Osome has partnered with Simon Squibb to help turn aspiring entrepreneur’s dreams into a reality. The partnership aims to..                                    </Typography>
                            <div className='justify-end flex items-center text-indigo-800'>
                                <IconButton disableRipple className="icon">
                                    <AccessTimeIcon className="text-indigo-800 font-extralight text-sm" />
                                </IconButton>
                                <Typography variant="body1" className="font-extralight text-sm">2 MIN READ</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="bg-slate-600 shadow-md rounded-xl">
                        <img src={image1.src} alt="Card 2" className="w-full h-48 object-cover rounded-t-lg" />
                        <CardContent className={styles.background}>
                            <Typography variant="h6" gutterBottom className='text-indigo-800 font-bold pr-16'>
                                Osome Partners With UK’s Entrepreneur Guru, Simon Squibb
                            </Typography>
                            <Typography variant="body2" className='text-indigo-800 pr-16'>
                                Osome has partnered with Simon Squibb to help turn aspiring entrepreneur’s dreams into a reality. The partnership aims to..
                            </Typography>
                            <div className='justify-end flex items-center text-indigo-800'>
                                <IconButton disableRipple className="icon">
                                    <AccessTimeIcon className="text-indigo-800 font-extralight text-sm" />
                                </IconButton>
                                <Typography variant="body1" className="font-extralight text-sm">2 MIN READ</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="bg-slate-600 shadow-md rounded-xl	">
                        <img src={image1.src}  alt="Card 3" className="w-full h-48 object-cover rounded-t-lg" />
                        <CardContent className={styles.background}>
                            <Typography variant="h6" gutterBottom className='text-indigo-800 font-bold pr-16'>
                                Osome Partners With UK’s Entrepreneur Guru, Simon Squibb
                            </Typography>
                            <Typography variant="body2" className='text-indigo-800 pr-16'>
                                Osome has partnered with Simon Squibb to help turn aspiring entrepreneur’s dreams into a reality. The partnership aims to..
                            </Typography>
                            <div className='justify-end flex items-center text-indigo-800'>
                                <IconButton disableRipple className="icon">
                                    <AccessTimeIcon className="text-indigo-800 font-extralight text-sm" />
                                </IconButton>
                                <Typography variant="body1" className="font-extralight text-sm">2 MIN READ</Typography>
                            </div>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </div>
    </div>
</div>

  )
}

