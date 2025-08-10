import * as React from 'react';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/material';

export default function AccordionTransition({desc}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={[
          expanded
            ? {
                [`& .${accordionClasses.region}`]: {
                  height: 'auto',
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'block',
                },
              }
            : {
                [`& .${accordionClasses.region}`]: {
                  height: 0,
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'none',
                },
              },
        ]}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Product Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {desc}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Delivery and Returns</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Box>
  
  <Typography>This item will be dispatched within 24 hours. Post dispatch, the delivery times are:</Typography>
  
  <ul>
    <li>24 hours for orders within Metro Mumbai.</li>
    <li>2-7 working days delivery for orders from other towns/cities in India.</li>
  </ul>
  
  <Typography>Delivery times may be subject to stock availability, and delays caused by shipping partners which are beyond Petsys control, and as such, delivery times may be extended. </Typography>
  <br />
  <strong>Returns:</strong>
  <br />
  <Typography>This item is non-returnable. Exchange or store credit is available only for defective or damaged products within 7 days of the delivery date.</Typography>
  <br/>
  For more details, please view our <a href="/" >Returns Policy</a>
          
  </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
