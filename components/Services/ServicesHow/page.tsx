import React from "react";
import styles from "./style.module.css";
import json from '../../../public/json/services/service1.json';

const steps = json.London_Registered_Office.How_to_get_your_London_registered_Office_Address;

export const ServiceHow = () => {
  return (
    <div className={`${styles.container} pt-0 pb-20 ps-52 pe-32 mx-auto`}>
      <div>
        <h2 className="text-left font-medium sm:text-xl lg:text-3xl leading-tight">
          {steps.Title}
        </h2>
      </div>
      <div className={`${styles.d_flex} gap-6 mt-8 justify-center`}>
        <p className="font-semibold text-lg leading-tight text-indigo-600 mb-10">
          Steps :
        </p>
        <ul className="list-none pl-6 mb-8">
          {steps.Steps.map((step, index) => (
            <li key={index} className="flex flex-row gap-4 items-center mb-4">
              <span className="bg-indigo-600 text-2xl text-white rounded-full text-center py-2 px-4">
                {index + 1}
              </span>
              <p className="text-left lg:text-lg sm:text-base leading-tight">
                {step}
                {/* {step.link && (
                  <a href="" className="text-blue-500">
                    {step.linkText}
                  </a>
                )} */}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
