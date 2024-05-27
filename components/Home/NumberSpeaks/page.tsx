"use client";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./style.module.css";
import bg from "../../../public/home/numberspeaks/number.png";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const number = [
  {
    id: 1,
    name: "9000+",
    message: "Clients served",
  },
  {
    id: 2,
    name: "10+ ",
    message: "Years industry serving",
  },
  {
    id: 3,
    name: " 500+",
    message: "Professionals’ network",
  },
  {
    id: 4,
    name: "45000",
    message: "Consultation offered",
  },
];
export const NumberSpeaks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const testimonialsPerPage = isMobile ? 3 : 3;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerPage < number.length
        ? prevIndex + testimonialsPerPage
        : prevIndex
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - testimonialsPerPage >= 0
        ? prevIndex - testimonialsPerPage
        : prevIndex
    );
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div className='bg-slate-300 pb-5'>
    //     <p className='text-3xl text-center pt-10'>Number speaks <br /> for<span className='text-indigo-600'> Safe Ledgar</span></p>
    //     <div className={` ${styles.bg}`}>
    //         <p>Our commitment has solidified our reputation as a dependable
    //             partner in the increasingly digital landscape of the United Kingdom.
    //         </p>
    //         <Button variant="contained" className="mt-2 font-medium px-5 mr-2">JOIN SAFELEDGER TEAM</Button>

    //     </div>
    // </div>
    <>
      <h4 className="text-3xl text-center mb-8">
        Number speaks <br /> for
        <span className="text-indigo-600"> Safe Ledgar</span>
      </h4>
      <div className="relative isolate overflow-hidden py-10 sm:py-10">
        <img
          src={bg.src}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className={` ${styles.width}`}>
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className={` px-6 lg:px-8  ${styles.hide}`}>
            <div className="text-center">
              <p
                className={` text-sm leading-8 text-purple-800 text-center ${styles.paragraph}`}
              >
                Our commitment has solidified our reputation as a dependable
                partner in the increasingly digital landscape of the United
                Kingdom.
              </p>
              <Button
                variant="contained"
                className="mt-10 p-4 rounded-xl	bg-indigo-700 px-10"
              >
                JOIN SAFELEDGER TEAM
              </Button>
            </div>
            <div className="mx-auto  max-w-2xl lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3 flex justify-around	">
              <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-10 ">
                <div className="flex flex-col	items-center	">
                  <p className=" text-2xl leading-7 text-rose-800 font-black">
                    9 , 000 +
                  </p>
                  <p className="leading-9 tracking-tight text-black">
                    Clients served
                  </p>
                </div>
              </div>
              <dl className="mt-10 grid grid-cols-1 gap-8 sm:mt-10">
                <div className="flex flex-col	items-center	">
                  <p className=" text-2xl leading-7 font-black text-indigo-600">
                    10 + Years
                  </p>
                  <p className="leading-9 tracking-tight text-black">
                    Industry serving
                  </p>
                </div>
              </dl>
              <dl className="mt-10 grid grid-cols-1 gap-8 sm:mt-10">
                <div className="flex flex-col	items-center	">
                  <p className=" text-2xl leading-7 font-black text-indigo-600">
                    500 +
                  </p>
                  <p className="leading-9 tracking-tight text-black">
                    Professionals’ network
                  </p>
                </div>
              </dl>
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none sm:grid-cols-1 lg:grid-cols-2 flex justify-around	mb-10">
              <dl className="mt-10 grid grid-cols-1 gap-8 sm:mt-10">
                <div className="flex flex-col	items-center	">
                  <p className=" text-2xl leading-7 font-black text-indigo-600">
                    45000 +
                  </p>
                  <p className="leading-9 tracking-tight text-black">
                    Consultation offered
                  </p>
                </div>
              </dl>
              <dl className="mt-10 grid grid-cols-1 gap-8 sm:mt-10">
                <div className="flex flex-col	items-center	">
                  <p className=" text-2xl leading-7 font-black text-indigo-600">
                    3600 +
                  </p>
                  <p className="leading-9 tracking-tight text-black">
                    Company Incorporated
                  </p>
                </div>
              </dl>
            </div>
          </div>

          <div className={`${styles.show} text-center`}>
            <p
              className={` text-sm leading-8 text-purple-800 text-center ${styles.paragraph}`}
            >
              Our commitment has solidified our reputation as a dependable
              partner in the increasingly digital landscape of the United
              Kingdom.
            </p>
            <Box
              style={{ margin: "auto", padding: "16px", textAlign: "center" }}
            >
              <Grid container spacing={2} justifyContent="space-between">
                {number
                  .slice(currentIndex, currentIndex + testimonialsPerPage)
                  .map((number, index) => (
                    <Grid
                      item
                      xs={4}
                      sm={4}
                      md={4}
                      key={number.id}
                      className={`md:flex md:items-center md:mb-4 md:p-4 md:rounded-lg ${
                        index === 1 ? "md:col-span-2" : ""
                      }`}
                    >
                      <Box
                        style={{
                          alignItems: "center",
                          marginBottom: "16px",
                          padding: "16px",
                          borderRadius: "8px",
                        }}
                      >
                        <div className="ml-5">
                          <h5
                            className={`text-2xl leading-7 font-black ${
                              index === 1
                                ? "text-4xl text-rose-700 font-bold"
                                : "text-blue-700"
                            }`}
                          >
                            {number.name}
                          </h5>

                          <Typography
                            variant="body1"
                            style={{
                              marginTop: "8px",
                              marginBottom: "8px",
                              flex: 1,
                            }}
                            className="text-slate-400"
                          >
                            {number.message}
                          </Typography>
                        </div>
                      </Box>
                    </Grid>
                  ))}
              </Grid>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "16px",
                }}
              >
                <IconButton
                  onClick={prevTestimonial}
                  disabled={currentIndex === 0}
                >
                  <NavigateBeforeIcon />
                </IconButton>
                <IconButton
                  onClick={nextTestimonial}
                  disabled={currentIndex + testimonialsPerPage >= number.length}
                >
                  <NavigateNextIcon />
                </IconButton>
              </Box>
            </Box>
            <Button
              variant="contained"
              className="p-4 rounded-xl	bg-indigo-700 px-10"
            >
              JOIN SAFELEDGER TEAM
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
