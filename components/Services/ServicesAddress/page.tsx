import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import img1 from "../../../public/services/servicesaddress/Rectangle 121.png";
import img2 from "../../../public/services/servicesaddress/Rectangle 122.png";
import json from '../../../public/json/services/service1.json'


const Data = json.London_Registered_Office.What_is_a_Registered_Office_Address

const NewData = json.London_Registered_Office.Why_do_you_need_a_London_registered_office


export const ServicesAddress = () => {
  return (
    <div className={`${styles.container} pt-28 pb-20 ps-32 pe-28 `}>
      <div className={`${styles.col} flex flex-row justify-center gap-20 w-7/10`}>
        <div className={`${styles.text} w-full lg:w-3/5 sm:w-3/5`}>
          <h2 className={`${styles.heading}`}>
            {Data.Title}
          </h2>
          <p className={`${styles.para}`}>
            {Data.Description}
          </p>
        </div>
        <div className={`${styles.image} lg:w-2/5 w-full sm:w-2/5`}>
          <Image className={`${styles.img}`} src={img1} alt="" />
        </div>
      </div>
      <div className={`${styles.col} flex flex-row justify-center my-20 gap-16`}>
        <div className={`${styles.image} lg:w-2/5 w-full sm:w-2/5`}>
          <Image
            className="w-501 h-348  rounded-tl-20 rounded-tr-0"
            src={img2}
            alt=""
          />
        </div>
        <div className={`${styles.text} lg:3/5 sm:w-3/5 w-full` }>
          <h2 className={`${styles.heading_2} break-words `}>
            {NewData.Title}
          </h2>
          <p className={`${styles.para_2}`}>
            {Object.entries(NewData).slice(1).map(([key, value]) => (
              value && <p key={key} className="">{key}</p>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
