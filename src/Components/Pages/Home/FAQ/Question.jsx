import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';




const TextQuestion = styled('h1')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.green,
    fontSize: "20px",
}));



export default function SimpleAccordion() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <TextQuestion >
                        What types of services does your agency offer?</TextQuestion>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Our agency offers a wide range of services, including branding and identity design, website design and development, social media management, and digital marketing strategy.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <TextQuestion>
                        Do you offer ongoing support after a project is completed?

                    </TextQuestion>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, we offer ongoing support and maintenance services to our clients. We believe in building long-term relationships with our clients and are committed to helping them achieve their goals beyond the initial project scope.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <TextQuestion>
                        How much does it cost to work with your agency?
                    </TextQuestion>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The cost of our services varies depending on the specific needs of each client. We offer customized quotes and work with our clients to develop a budget that fits their needs.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <TextQuestion>
                        Can you provide references or case studies of previous work?

                    </TextQuestion>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, we are happy to provide references and case studies upon request. Our portfolio showcases some of our previous work, and we are proud to have worked with a diverse range of clients across multiple industries.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <TextQuestion>
                        How can I get your plan?
                    </TextQuestion>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, we are happy to provide references and case studies upon request. Our portfolio showcases some of our previous work, and we are proud to have worked with a diverse range of clients across multiple industries.
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </div>
    );
}