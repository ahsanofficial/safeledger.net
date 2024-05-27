"use client";
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import group from "../../../public/landing2/landingbanner2/Group 40.png";
import ZohoFormService from "@/components/Form/ZohoForm";

const HeroSection: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width:768px)');
  const isMobile = !isDesktop; 

  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2280) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.Backgound}>
      <Grid container spacing={3} className="justify-evenly">
        <div className="flex flex-col justify-right">
          <h1 className="text-5xl text-black font-semibold">
            Company registration in UK
          </h1>
          <h2 className="text-4xl text-blue-600 font-normal mt-4">
            Register your company
          </h2>
          <h2 className="text-4xl text-blue-600 font-normal">
            Online hassle-free
          </h2>
          <img src={group.src} alt="group" />
        </div>

        {/* Desktop View */}
        {isDesktop && (
          <Grid item xs={12} sm={3} className={`rounded-3xl ${styles.margin}`}>
            <div className={isFixed ? styles.formContainerFixed : styles.formContainer}>
              <Typography
                variant="h6"
                gutterBottom
                className="text-white font-light text-sm text-center"
              >
                Register yourself
              </Typography>
              <ZohoFormService service={""} />
            </div>
          </Grid>
        )}

        {/* Mobile View */}
        {isMobile && (
          <Grid item xs={12} className={`rounded-3xl ${styles.margin}`}>
            <div className={styles.formContainer}>
              <Typography
                variant="h6"
                gutterBottom
                className="text-white font-light text-sm text-center"
              >
                Register yourself
              </Typography>
              <ZohoFormService service={""} />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default HeroSection;
