import React from "react";
import styles from "./style.module.css";
import { useState, useEffect } from 'react';
import json from '../../../public/json/services/service1.json';

export const ServicesOffer = () => {
  const servicesData = json.London_Registered_Office.What_do_we_Offer.Services;

  return (
    <div className={`${styles.container} pt-10 pb-20 ps-32 pe-56`}>
      <div className={`${styles.space} lg:gap-20   mb-10`}>
        <div>
          <div>
            <div className="flex items-center">
              <span className={`${styles.left_border}`}></span>
              <h2 className={`sm:text-xl lg:text-2xl font-bold`}>{json.London_Registered_Office.What_do_we_Offer.MainTitle}</h2>
            </div>

          </div>
          <div className={`${styles.space} ms-6 gap-10 mt-10 mb-16`}>
            {servicesData.slice(0, 3).map((service, index) => (
              <div key={index} className={`${styles.box}`}>
                <div className={`${styles.circle} mb-4`}></div>
                <h6 className="w-138 h-25 text-left mb-4 sm:text-sm font-medium leading-tight text-indigo-600">
                  {service.Title}
                </h6>
                <p className="w-258 h-89 text-left text-sm leading-tight mb-2">
                  {service.Description}
                </p>
                <p className="text-left font-brfirma cursor-pointer text-sm leading-tight text-red-400">
                  {service.ReadMore}
                </p>
              </div>
            ))}
          </div>
          <div className={`${styles.space} ms-6 gap-10 flex mt-10 mb-16`}>
            {servicesData.slice(3, 6).map((service, index) => (
              <div key={index} className={`${styles.box}`}>
                <div className={`${styles.circle} mb-4`}></div>
                <h6 className="w-138 h-25 text-left mb-4 sm:text-sm font-medium leading-tight text-indigo-600">
                  {service.Title}
                </h6>
                <p className="w-258 h-89 text-left text-sm leading-tight mb-2">
                  {service.Description}
                </p>
                <p className="text-left font-brfirma cursor-pointer text-sm leading-tight text-red-400">
                  {service.ReadMore}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
