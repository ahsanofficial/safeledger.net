import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './style.module.css';
import image1 from '../../../public/home/partners/image1.jpeg';
export const Patners = () => {


    return (
        <div className=''>
            <div className={`pt-16 ${styles.bg}`}>
                <h1 className='text-black text-3xl text-center'>Why Partner with </h1>
                <h1 className='text-indigo-600 text-3xl text-center mb-6 mt-2'>SafeLedger?</h1>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="bg-slate-600 shadow-md rounded-xl">
                            <img src={image1.src} alt="Card 1" className="w-full h-48 object-cover rounded-t-lg" />
                            <CardContent className={styles.background}>
                                <Typography variant="h6" gutterBottom className='text-white'>
                                    Expert Guidance
                                </Typography>
                                <Typography variant="body2" className='text-white'>
                                    Partnering with SafeLedger provides access to a team of seasoned professionals who offer expert advice and insights on compliance, financial management, and business operations, ensuring you navigate the complexities of business with confidence.                                </Typography>
                                <div className='text-right'>
                                    <Button variant="outlined" className='mt-5 rounded-full	border-slate-50	text-white '>Learn More</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="bg-slate-600 shadow-md rounded-xl">
                            <img src={image1.src} alt="Card 2" className="w-full h-48 object-cover rounded-t-lg" />
                            <CardContent className={styles.background}>
                                <Typography variant="h6" gutterBottom className='text-white'>
                                    Comprehensive Services
                                </Typography>
                                <Typography variant="body2" className='text-white'>
                                    SafeLedger offers a one-stop solution for all your business needs, from incorporation and accounting to administrative support. This integrated approach simplifies your operations, saving you time and allowing you to focus more on growth and development.                                </Typography>
                                <div className='text-right'>
                                    <Button variant="outlined" className='mt-5 rounded-full	border-slate-50	text-white '>Learn more</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="bg-slate-600 shadow-md rounded-xl	">
                            <img src={image1.src} alt="Card 3" className="w-full h-48 object-cover rounded-t-lg" />
                            <CardContent className={styles.background}>
                                <Typography variant="h6" gutterBottom className='text-white'>
                                    Customized Support
                                </Typography>
                                <Typography variant="body2" className='text-white'>
                                    Each business is unique, and SafeLedger recognizes this by offering tailored services that fit your specific needs and goals. Whether you are a startup or an established enterprise, our personalized support is designed to elevate your business to the next level                                </Typography>
                                <div className='text-right'>
                                    <Button variant="outlined" className='mt-5 rounded-full	border-slate-50	text-white '>Learn more</Button>
                                </div>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}