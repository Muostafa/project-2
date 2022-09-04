import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import styles from "./contentAccordion.module.css";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  ".MuiAccordionSummary-expandIconWrapper": { transform: "rotate(-90deg)" },
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

function ContentAccordion(props) {
  let info = "";
  if (props.info)
    info = props.info.map((info, index) => <div key={index} className={styles.info}><PlayCircleIcon fontSize="small" className={styles.playIcon}/><h3 >{info}</h3></div>);

  const [expanded, setExpanded] = useState(false);
  
  const handleChange = (panel) => (event, newExpanded) => {
    if(newExpanded)
      setExpanded(expanded => !expanded)
    else
    setExpanded(false);
  };

  return (
    <MuiAccordion
      className={styles.accordion}
      disableGutters
      elevation={0}
      square
      expanded={expanded}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        className={styles.summary}
        aria-controls="panel1d-content"
        id="panel1d-header"
      >
        <h3 className={styles.title}>{props.title}</h3>
        <h3 className="tablet">{props.info.length} lectures • {Math.floor(props.info.length * 4.3)}min</h3>
      </AccordionSummary>
      <MuiAccordionDetails className={styles.infoContainer}>
        {info}
      </MuiAccordionDetails>
    </MuiAccordion>
  );
}

export default ContentAccordion;
