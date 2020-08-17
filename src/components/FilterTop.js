import React from "react";
import { Button, FormControl, Box } from "@material-ui/core";
import FilterTopStyle from "../components/Style/FilterTopStyle";

function FilterTop() {
  const classes = FilterTopStyle();
  return (
    <FormControl>
      <Box display="flex">
        <Button variant="contained" className={classes.button} color="primary">
          Дороже
        </Button>
        <Button variant="contained" className={classes.button}>
          Дешевле
        </Button>{" "}
      </Box>
    </FormControl>
  );
}

export default FilterTop;
