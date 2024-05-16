import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./style.module.css";

export const ServicesFaq = () => {
  return (
    <div className="container mx-auto pb-20 ps-48 pe-40">
      <div className="pl-60">
        <h2 className="sm: text-xl lg: text-3xl font-semibold mb-10 text-left">
          Frequently asked questions (FAQ’s)
        </h2>
      </div>
      

      <div className={`${styles.bg} `}>
        <Accordion className="mt-6">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Q1. What is a registered office in London?
          </AccordionSummary>
          <AccordionDetails>
            An association or corporation that has been incorporated uses its
            registered office as its official address. Since it is part of the
            public record, other entities, such as Companies House and HMRC, can
            correspond with it.
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-6">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Q2. Can a UK company have a registered office abroad?
          </AccordionSummary>
          <AccordionDetails>
            A limited company that is registered in both England and Wales may
            choose to locate its registered office in either nation, and it may
            change its registered office location at any time.{" "}
          </AccordionDetails>
        </Accordion>

        <Accordion className="mt-6">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Q3. Can a company have two registered offices?{" "}
          </AccordionSummary>
          <AccordionDetails>
            Each company may, by law, conduct business from more than one
            trading address, but it may only have one RO. A corporation may
            occasionally choose to relocate its RO from one Indian state to
            another in an effort to pursue greater growth in terms of available
            resources, consumer demand, governmental regulations, or improved
            management.
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-6">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Q4. How do I start an office in the UK?
          </AccordionSummary>
          <AccordionDetails>
            To start an office in London, you must have a London registered
            office address along with other prerequisites. {" "}
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-6">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Q5. Can two companies have the same registered address?{" "}
          </AccordionSummary>
          <AccordionDetails>
            It is NOT illegal for more than one firm to use the same
            registration address. Every company that wants to be inspected by
            other government agencies and receive official communication must
            have a genuine UK-registered address, according to Companies House
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-6">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Q6. Does a UK company need a UK-registered office?
          </AccordionSummary>
          <AccordionDetails>
            When establishing a limited company, you are required to supply a
            registered office address. Sending all written correspondence to
            this address is required. All correspondence from your company must
            be sent to you if you decide to have a third-party agent handle it.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
