import React from "react";
import styles from "./style.module.css";
import json from '../../../public/json/services/service1.json'

export const ServicesPackage = () => {

  const Data = json.London_Registered_Office;
  const Package = Data.Package_Inclusion

  return (
    <div className={`${styles.container} lg:mt-30 sm:mt-30 mt-6 sm:px-4 lg:pt-10 lg:pb-20 lg:ps-32 lg:pe-56 `}>
      <div className="flex gap-4 lg:mb-10 sm:gap-1 ">
        <div>
          <span className={`${styles.left_border}`}></span>
        </div>
        <div className=" sm:my-0 lg:my-0 my-4 font-normal font-brfirma text-left leading-tight">
          {Data.Banner_Content}
        </div>
      </div>
      <div className={`${styles.col} lg:flex justify-center sm:gap-2 lg:gap-16`}>
        <div className={`${styles.bg_arrow} flex items-center justify-center`}>
          <p className="text-3xl font-normal font-brfirma text-left text-white leading-tight">
            Package inclusion
          </p>
        </div>
        <div className={`${styles.package_points} sm: mx-auto`}>
          <div>
            {Object.entries(Package).map(([key, value]) => (
              value && <p key={key} className="w-292 h-25 font-brfirma text-black text-left font-bold leading-tight py-4 border-b border-solid border-gray-300">{key}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
