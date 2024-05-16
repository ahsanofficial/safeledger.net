import React from "react";
import styles from "./style.module.css";
import main from "../../../public/about/aboutmain/Group 161.png";
import play from "../../../public/about/aboutmain/Vector.png";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";

export const AboutMain = () => {
  return (
    <div className={`grid grid-cols-2 gap-4 pt-10 ${styles.bg}`}>
      <Grid  direction="column" container spacing={2}>
        <Grid item>
          <Typography variant="h5" className="text-5xl sm: text-lg font-medium text-start leading-normal text-indigo-600">About Us</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className="sm: text-base">Entrepreneurs serve as the catalysts of societal advancement, adept at unraveling complexities to uncover opportunities that propel us towards a brighter future. Safe Ledger recognizes the pivotal role entrepreneurs play as problem solvers, sparing them the burden of mundane tasks to ensure their undivided attention remains on pioneering innovative solutions.</Typography>
        </Grid>
        <Grid item className="mt-6">
          <Typography variant="body1">  Through relieving entrepreneurs of routine responsibilities, Safe Ledger empowers them to devote their energy and expertise to steering their businesses towards growth and success. By shouldering the administrative load, we enable entrepreneurs to remain laser-focused on charting the course for progress, unencumbered by distractions. In the years ahead, entrepreneurs will recognize that administrative routines fall outside their purview, sparing little thought for shouldering these tasks themselves. Safe Ledger champions the pursuit of liberation from such mundane duties, tirelessly striving to hasten the arrival of this forthcoming paradigm.</Typography>

        </Grid>
      </Grid>

      <Grid container direction="column">
        <Grid item>
          <Image src={main} alt="Image 2" className="mt-16"/>
        </Grid>
      </Grid>
    </div>

  );
};


