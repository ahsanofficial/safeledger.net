import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import img1 from "../../../public/about/aboutwhy/img1.png";
import img2 from "../../../public/about/aboutwhy/img2.png";
import img3 from "../../../public/about/aboutwhy/img3.png";
import img4 from "../../../public/about/aboutwhy/img4.png";
import image1 from "../../../public/about/aboutwhy/image1.png"
import image2 from "../../../public/about/aboutwhy/image2.png"
import { Grid } from "@mui/material";

export const AboutWhy = () => {
  return (
    <div className="pt-10 sm:pb-20 lg:px-40 mx-auto">
      <div className="flex flex row justify-center">
        <h1 className="font-roboto text-center text-indigo-600 text-3xl font-medium text-center leading-normal">
          Why Safe Ledger?
        </h1>
      </div>
      <div className="">
        <div>
          <img src={image1.src} className={`${styles.image1}`} />
          <img src={image2.src} className={`${styles.image2}`} />
        </div>
      </div>
      <div className={`flex justify-center item-center mx-auto mt-0 sm:mt-10 my-26 gap-20 ${styles.blue_rectangle}`}>
        <Grid container spacing={2} className="justify-around	">
          <Grid item xs={12} sm={4}>
            <div className={`${styles.d_flex}`}>
              <div className="mx-auto my-2 pt-6">
                <Image className={`${styles.icon}`} src={img1} alt="" />
                <p className="sm:text-2xl lg:text-2xl mt-10 text-center">
                  Initial Consultation
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={`${styles.d_flex}`}>
              <div className="mx-auto my-2 pt-6">
                <Image className={`${styles.icon}`} src={img2} alt="" />
                <p className="sm:text-2xl lg:text-2xl mt-10 text-center">
                  Documentation Review and Preparation
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={`flex justify-center item-center sm:mt-16 lg:mt-16 mx-auto my-26 gap-20 ${styles.blue_rectangle}`}>
        <Grid container spacing={2} className="justify-around	">
          <Grid item xs={12} sm={4}>
            <div className={`${styles.d_flex}`}>
              <div className="mx-auto my-2 pt-6">
                <Image className={`${styles.icon}`} src={img1} alt="" />
                <p className="sm:text-2xl lg:text-2xl mt-10 text-center">
                  Submission and Processing
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={`${styles.d_flex}`}>
              <div className="mx-auto my-2 pt-6">
                <Image className={`${styles.icon}`} src={img2} alt="" />
                <p className="sm:text-2xl lg:text-2xl mt-10 text-center">
                  Confirmation and Follow-Up
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

    </div>
  );
};
