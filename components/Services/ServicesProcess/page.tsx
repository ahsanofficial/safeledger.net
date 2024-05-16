import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import json from '../../../public/json/services/service1.json';
import logo from "../../../public/services/servicesprocess/Safe Ledger 1 2.png";
import arrow from "../../../public/services/servicesprocess/arrow.png";
const processes = json.London_Registered_Office.How_does_SafeLedger_make_your_process_easier;
const believeInNumber = json.London_Registered_Office.Believe_in_Numbers;
export const ServicesProcess = () => {
  return (
    <section className={`${styles.container} mx-auto ps-48 pe-40 pb-16`}>
      <div className="flex justify-center">
        <Image className="" src={logo} alt="" />
      </div>
      <h2 className="lg:text-3xl sm:text-xl font-medium text-center my-8 leading-tight">
        {processes.Title}
      </h2>
      <div className="mt-8">
        {processes.Services.map((step, index) => (
          <div key={index} className="flex flex-row lg:gap-8 sm:gap-4 justify-between items-start mt-6">
            <h3 className={`${styles.blue_heading} text-sm text-blue-600 font-medium`}>
              {step.Title1}
            </h3>
            <Image className={`${styles.arrow}`} src={arrow} alt="" />
            <p className="text-sm text-left font-normal py-0">
              {step.Title2}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="mt-16 text-center">
        <h3 className="text-3xl sm:text-xl font-semibold mb-8">Believe in Numbers</h3>
        <div className="sm:pl-4 lg:pl-60">
          {believeInNumber.map((statistic, index) => (
            <p key={index} className="text-lg font-normal text-left mb-4">
              <span className="text-lg text-blue-600 font-bold">{statistic.value}</span>&nbsp;{statistic.description}
            </p>
          ))}
        </div>
      </div> */}
      <div className="mt-16 text-center">
      <h3 className="text-3xl font-semibold mb-8">{believeInNumber.Title}</h3>
      <div className="sm:pl-60 lg:pl-60 pl-0">
        {believeInNumber.Services.map((item, index) => (
          <p key={index} className="text-lg font-normal text-left mb-4">
            <span className="text-lg text-blue-600 font-bold">{item.number}</span>
            &nbsp;{item.description}
          </p>
        ))}
      </div>
    </div>
    </section>
  );
};
