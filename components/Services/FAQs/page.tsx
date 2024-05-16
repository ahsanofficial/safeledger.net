import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './style.module.css';
import json from '../../../public/json/services/service1.json'
const faqData = json.London_Registered_Office.FAQs
const Faq: React.FC = () => {
    return (
        <div>
            <div className={` p-6`} >
                <div className={`flex justify-around items-center`} >
                    <h1 className=' font-medium text-2xl	'>{faqData.Title}</h1>
                </div>
            </div>
            <div className={`${styles.bg} mt-6`}>
                {faqData.Services.map((faq, index) => (
                    <Accordion key={index} className='mt-6' defaultExpanded={true}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index + 1}-content`}
                            id={`panel${index + 1}-header`}
                        >
                            {faq.question}
                        </AccordionSummary>
                        <AccordionDetails>
                            {faq.answer}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}
export default Faq;