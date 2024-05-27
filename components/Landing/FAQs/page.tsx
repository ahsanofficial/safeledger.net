import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './style.module.css';
const Faq = () => {


    return (
        <div >
            <div className={`p-6 ${styles.book}`}>
                <div className={`sm:flex lg:flex justify-around items-center	${styles.bg}`} >
                    <h1 className='text-white font-medium	'>Book a free consultation with our company formation experts</h1>
                    <button className={`bg-white text-blue-600 sm:mt-0 lg:mt-0 mt-6 px-6 py-2 rounded-lg`}>BOOK FREE CONSULTATION</button>
                </div>
            </div>
            <div className={`${styles.bg} mt-6`}>
                <Accordion className='mt-6' defaultExpanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q1. What is a registered office in London?
                    </AccordionSummary>
                    <AccordionDetails>
                        An association or corporation that has been incorporated uses its registered office as its official address. Since it is part of the public record, other entities, such as Companies House and HMRC, can correspond with it.
                    </AccordionDetails>
                </Accordion>
                <Accordion className='mt-6' defaultExpanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q2. Can a UK company have a registered office abroad?
                    </AccordionSummary>
                    <AccordionDetails>
                        A limited company that is registered in both England and Wales may choose to locate its registered office in either nation, and it may change its registered office location at any time.                </AccordionDetails>
                </Accordion>

                <Accordion className='mt-6' defaultExpanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >Q3. Can a company have two registered offices? </AccordionSummary>
                    <AccordionDetails>
                        Each company may, by law, conduct business from more than one trading address, but it may only have one RO. A corporation may occasionally choose to relocate its RO from one Indian state to another in an effort to pursue greater growth in terms of available resources, consumer demand, governmental regulations, or improved management.
                    </AccordionDetails>
                </Accordion>
                <Accordion className='mt-6' defaultExpanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q4. How do I start an office in the UK?
                    </AccordionSummary>
                    <AccordionDetails>
                        To start an office in London, you must have a London registered office address along with other prerequisites.                 </AccordionDetails>
                </Accordion>
                <Accordion className='mt-6' defaultExpanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q5. Can two companies have the same registered address? </AccordionSummary>
                    <AccordionDetails>
                        It is NOT illegal for more than one firm to use the same registration address. Every company that wants to be inspected by other government agencies and receive official communication must have a genuine UK-registered address, according to Companies House
                    </AccordionDetails>
                </Accordion>
                <Accordion className='mt-6 mb-6' defaultExpanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q6. Does a UK company need a UK-registered office?</AccordionSummary>
                    <AccordionDetails>
                        When establishing a limited company, you are required to supply a registered office address. Sending all written correspondence to this address is required. All correspondence from your company must be sent to you if you decide to have a third-party agent handle it.
                    </AccordionDetails>
                </Accordion>
            </div>




        </div>
    )
}
export default Faq;