import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Style from "./style.js";

function FilterTop({ speedData, costData }) {
  const classes = Style();
  const [state, setState] = useState("cheap");
  const clickHandler = (value) => (event) => {
    event.preventDefault();
    setState(value);
  };

  return (
    <form className="filterTop">
      <Button
        variant="contained"
        className={classes.button}
        color={state === "cheap" ? "primary" : "default"}
        onClick={clickHandler("cheap")}
      >
        Дешевле
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        color={state === "speed" ? "primary" : "default"}
        onClick={clickHandler("speed")}
      >
        Быстрее
      </Button>
    </form>
  );
}

export default FilterTop;
