import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import banner from "../../../public/about/aboutbanner/Rectangle 134.jpg";

const AboutUsBanner: React.FC = () => {
  return (
    <div className={` bg-gray-200 p-4 sm:p-8 ${styles.center}`}>
      <div  className={` sm:text-center ${styles.quickly}`}>
        <h3 className="text-4xl font-roboto text-indigo-600 leading-tight" >
          Register Your Business Quickly and  Fulfill Your Business Requirements
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <Image src={banner} alt="" className={`  ${styles.img}`} />
      </div>
    </div>
  );
};

export default AboutUsBanner;
