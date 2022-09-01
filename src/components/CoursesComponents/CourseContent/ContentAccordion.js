import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import styles from "./contentAccordion.module.css";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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

function ContentAccordion() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
        <Typography className={styles.title}>Collions • 146 1</Typography>
      </AccordionSummary>
      <MuiAccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </MuiAccordionDetails>
    </MuiAccordion>
  );
}

export default ContentAccordion;
