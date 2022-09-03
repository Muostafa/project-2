import React, { useState } from "react";
import styles from "./Navigation.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const buttonStyle = {
  fontSize: "11px",
  color: "#6a6f73",
  fontWeight: "800",
};

function Navigation() {
  const [value, setValue] = useState("one");
  return (
    <div className={styles.nav}>
      <div className={styles.tabs}>
        <Tabs
          value={value}
          sx={{
            "& button": { ...buttonStyle },
            "& button.Mui-selected": { color: "black" },
          }}
          TabIndicatorProps={{ sx: { backgroundColor: "black" } }}
          aria-label="secondary tabs example"
        >
          <Tab
            className={styles.tab}
            value="one"
            label="OVERVIEW"
            onClick={() => setValue("one")}
          />
          <Tab
            className={styles.tab}
            value="two"
            label="CURRICULUM"
            onClick={() => setValue("two")}
          />
          <Tab
            className={styles.tab}
            value="three"
            label="INSTRUCTOR"
            onClick={() => setValue("three")}
          />
          <Tab
            className={styles.tab}
            value="four"
            label="REVIEWS"
            onClick={() => setValue("four")}
          />
        </Tabs>
      </div>
    </div>
  );
}

export default Navigation;
