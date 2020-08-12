import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Style from "./style.js";

function FilterTop() {
  const classes = Style();
  const [state, setState] = useState("cheap");
  const clickHandler = (value, arr) => (event) => {
    event.preventDefault();
    if (value === "cheap") {
      arr.sort((a, b) => (a.speed > b.speed ? 1 : -1));
      setState(value);
    }
    if (value === "speed") {
      arr.sort((a, b) => (a.cost > b.cost ? 1 : -1));
      setState(value);
    }
  };

  return (
    <form className="filterTop">
      <Button
        name="cheap"
        variant="contained"
        className={classes.button}
        color={state === "cheap" ? "primary" : "default"}
        onClick={clickHandler("cheap")}
      >
        Дешевле
      </Button>
      <Button
        name="speed"
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
