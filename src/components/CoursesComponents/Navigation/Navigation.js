import React, { useState } from "react";
import styles from "./Navigation.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


function Navigation() {
  const [value, setValue] = React.useState('one');

  const handleChange = () => {
    setValue(value);
  };
  return (
    <div className={styles.nav}>
      <div className={styles.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab value="one" label="Item One" onClick={() => setValue("one")}/>
          <Tab value="two" label="Item Two" onClick={() => setValue("two")}/>
          <Tab value="three" label="Item Three" onClick={() => setValue("three")}/>
          <Tab value="four" label="Item four" onClick={() => setValue("four")}/>
        </Tabs>
      </div>
    </div>
  );
}

export default Navigation;
