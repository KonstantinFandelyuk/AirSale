import React from "react";
import Button from "@material-ui/core/Button";
import FilterTopStyle from "../components/Style/FilterTopStyle";

function FilterTop() {
  const classes = FilterTopStyle();
  return (
    <>
      <Button variant="contained" className={classes.button}>
        Дороже
      </Button>
      <Button variant="contained" className={classes.button}>
        Дешевле
      </Button>
    </>
  );
}

export default FilterTop;
