import React from "react";
import Button from "@material-ui/core/Button";
import Style from "./style.js";

function Switcher({ onSortChange, sorting }) {
  const classes = Style();
  const clickHandler = (sorting) => () => onSortChange(sorting);

  return (
    <form className="filterTop">
      <Button
        variant="contained"
        className={classes.button}
        color={sorting === "cheap" ? "primary" : "default"}
        onClick={clickHandler("cheap")}
      >
        Дешевле
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        color={sorting === "speed" ? "primary" : "default"}
        onClick={clickHandler("speed")}
      >
        Быстрее
      </Button>
    </form>
  );
}

export default Switcher;
