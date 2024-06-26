import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import logo from "../../public/footer/Safe_Ledger__1_-removebg-white 1.png";
import fb from "../../public/footer/Vector.png";
import icon1 from "../../public/footer/Vector (1).png";
import icon2 from "../../public/footer/Vector (2).png";
import icon3 from "../../public/footer/Vector (3).png";
import icon4 from "../../public/footer/Vector (4).png";
import apple from "../../public/footer/Vector (5).png";
import google from "../../public/footer/Vector (6).png";
import dropdown from "../../public/footer/dropdown.png";
import flag from "../../public/footer/image 13.png";
import instagram  from "../../public/footer/instagram.png";
import { Link } from "@mui/material";

export const Footer = () => {
  return (
    <div className={`${styles.bg} py-20 px-28`}>
      <div className={`${styles.flex} border-b pb-28 border-opacity-50 border-blue-500`}>
        <div className={`${styles.flex} gap-8`}>
          <div className="w-257 h-30 mt-10">
            <h4 className="font-bold  text-left font-poppins text-xl font-bold leading-normal text-gray-400">
              SOLUTIONS FOR BUSINESS
            </h4>
            <Link href="/services/1" className="no-underline">
              <p className="text-lg font-normal  mt-4 text-left leading-tight text-white">
                London Registered Office
              </p>
            </Link>
            <Link href="/services/2" className="no-underline">
              <p className="text-lg font-normal  mt-4 text-left leading-tight text-white">
                Company Address Explained
              </p>
            </Link>

            <Link href="/services/3" className="no-underline">
              <p className="text-lg font-normal  mt-4 text-left leading-tight text-white">
                London Business Address
              </p>
            </Link>

            <Link href="/services/4" className="no-underline">
              <p className="text-lg font-normal  mt-4 text-left leading-tight text-white">
                Dormant Company Accounts
              </p>
            </Link>

            <Link href="/services/5" className="no-underline">
              <p className="text-lg font-normal  mt-4 text-left leading-tight text-white">
                Company Dissolution in UK
              </p>
            </Link>

            <Link href="/services/14" className="no-underline">
              <p className="text-lg font-normal  mt-4 text-left leading-tight text-white">
                VAT Registration in UK
              </p>
            </Link>

          </div>
          <div className="w-257 h-30 mt-10">
            <h4 className="font-bold  text-left font-poppins text-xl font-bold leading-normal text-gray-400">
              COMPANY
            </h4>
            <Link href="/aboutus" className="no-underline">
              <p className="text-base font-normal mt-2 text-left leading-tight text-white">
                About Us
              </p>
            </Link>
            <Link href="/contactus" className="no-underline">
              <p className="text-lg font-normal  mt-4 text-left leading-tight text-white">
                Contact Us
              </p>
            </Link>

            <p className="text-lg font-normal  mt-4 text-left leading-tight text-white">
              Privacy Policy
            </p>
            <p className="text-lg font-normal  mt-4 text-left leading-tight text-white">
              Terms & Conditions
            </p>
          </div>
        </div>

        <div className={`${styles.info} mt-10`}>
          <div>
            <div className="flex justify-center">
              <Image
                className={`${styles.logo} flex justify-end text-end`}
                src={logo}
                alt="logo"
              />
            </div>
            <p className={`font-roboto ${styles.address} text-left  mt-4`}>
              Registered Address in UK: 124-128, City Road, London, England,
              EC1V 2NX
            </p>
            <div className="flex justify-center items-center gap-6  flex-row mt-8">
              <Image src={icon3} alt="" className={styles.link}/>
              <Image src={instagram} alt=""/>
            </div>
            <div className="flex flex-row items-center gap-4 mt-8">
              <div className={`${styles.store}`}>
                <Image src={apple} alt="" />
                <span className="text-black text-sm font-bold text-left leading-tight p-4">
                  APPLE STORE
                </span>
              </div>
              <div className={`${styles.store}`}>
                <Image src={google} alt="" />
                <span className="text-black text-sm font-bold text-left leading-tight">
                  GOOGLE PLAY
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className={`${styles.country}`}>
                <Image src={flag} alt="" />
                <span className="text-white text-sm font-bold  leading-tight">
                  UNITED KINGDOM
                </span>
                <Image src={dropdown} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.Terms}mx-auto  text-center mt-14 mb-0`}>
        <p className="font-roboto font-light text-xs text-center text-gray-400 mt-4">
          By continuing this page, you agree to our Terms & Conditions, Privacy
          Policy and Refund Policy.
        </p>
        <p className="font-roboto font-light text-xs text-center text-gray-400 mt-4">
          © 2024 - Safe Ledger Private Limited. All rights reserved
        </p>
        <p className="font-roboto font-light text-xs text-center text-gray-400 mt-4">
          Please note that we are a facilitating platform enabling access to
          reliable professionals. We are not a law firm and do not provide legal
          services ourselves. The information on this website is for the purpose
          of knowledge only and should not be relied upon as legal advice or
          opinion.
        </p>
      </div>
    </div>
  );
};
