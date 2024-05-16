"use client";
import React from "react";

import styles from "./style.module.css";
import { Button, Grid } from "@mui/material";
import image1 from "../../../public/landing2/landingtaking/Rectangle 37.png";
import Image from "next/image";

export const Landing2Taking = () => {
  return (
    <div className={`flex sm:pt-6 lg:pt-6 ${styles.bg}`}>

      <div
        className={`mx-auto sm:max-w-4xl lg:max-w-4xl gap-x-8 gap-y-16 sm:py-24 lg:py-24 ${styles.center}`}
      >
        <div className=" sm:flex lg:flex block">
          <div>
            <h2 className="sm:text-5xl text-blue-600 font-bold sm:text-3xl lg:text-3xl text-2xl sm:pr-10 lg:pr-10">
              Taking Details into account
            </h2>
            <p className="mt-5 text-blue-600 sm:pr-10 lg:pr-10">
              Details are important — only through paying attention and
              precisely follow the process we can see the big picture and spot
              opportunities to improve.
            </p>

            <Button
              variant="outlined"
              className="font-medium px-5 rounded-full lg:mt-10 sm:mt-10 "
            >
              Know More
            </Button>
          </div>
          {/* <div className="mt-10 lg:mt-4 sm:mt-6 lg:mr-4">
          
        </div> */}
          <div>
            <div className="">
              <img src={image1.src} alt="Walnut" className="rounded-2xl" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
