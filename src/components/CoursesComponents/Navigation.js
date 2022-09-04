import React, { useState } from "react";
import styles from "../../styles/CoursePage/navigation.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const buttonStyle = {
  fontSize: "11px",
  color: "#6a6f73",
  fontWeight: "800",
};

function Navigation() {
  const [value, setValue] = useState("one");
  const navStyle = {
    width: "100%",   
    lineHeight: "1",
    backgroundColor: "#fff",
    color: "#1c1d1f",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08)",
  };
  return (
    <div style={navStyle}>
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
            sx={{ padding: "0 3rem" }}
            className={styles.tab}
            value="one"
            label="OVERVIEW"
            onClick={() => setValue("one")}
          />
          <Tab
            sx={{ padding: "0 3rem" }}
            className={styles.tab}
            value="two"
            label="CURRICULUM"
            onClick={() => setValue("two")}
          />
          <Tab
            sx={{ padding: "0 3rem" }}
            className={styles.tab}
            value="three"
            label="INSTRUCTOR"
            onClick={() => setValue("three")}
          />
          <Tab
            sx={{ padding: "0 3rem" }}
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
