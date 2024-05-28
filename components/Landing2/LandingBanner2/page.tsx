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
      if (window.scrollY > 2180) {
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
      <div className="flex items-center justify-around">
        <div >
          <h1 className="text-5xl text-black font-semibold sm:ml-0 lg:ml-0 ml-4">
            Company registration in UK
          </h1>
          <h2 className="text-4xl text-blue-600 font-normal mt-4 sm:ml-0 lg:ml-0 ml-4">
            Register your company Online hassle-free
          </h2>
          <img src={group.src} alt="group" />
        </div>
        {isDesktop && (
          <div>
            <div className={isFixed ? styles.formContainerFixed : styles.formContainer}>
              <Typography
                variant="h6"
                gutterBottom
                className="text-white text-center"
              >
                Register yourself
              </Typography>
              <ZohoFormService service={""} />
            </div>
          </div>
        )}
      </div>
      <div>
        <div>
          {isMobile && (
            <div className={styles.container}>
              <div className={styles.formContainer}>
                <Typography
                  variant="h6"
                  gutterBottom
                  className="text-white text-center"
                >
                  Register yourself
                </Typography>
                <ZohoFormService service={""} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
