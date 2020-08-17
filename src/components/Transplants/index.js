import React from "react";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
  Typography,
  FormControl,
} from "@material-ui/core";
import Style from "./style.js";

function FilterLeft({ state, transplants, onChange, className, component = "div" }) {
  const handleChange = (event) => {
    const { name, checked } = event.target;
    const newState = {
      ...state,
      [name]: {
        ...state[name],
        checked,
      },
    };
    const [transplantAllName, ...dependentTransplantInputs] = transplants;

    if (name !== transplantAllName) {
      // const isAllTransplantsChecked = transplants.every(
      //   (controlName) => controlName === "transplantAll" || newState[controlName].checked,
      // );
      const selectedTransplants = dependentTransplantInputs.filter(
        (controlName) => newState[controlName].checked,
      );
      const isAllTransplantsChecked = selectedTransplants.length === transplants.length - 1;
      console.log({
        selectedTransplants,
        "selectedTransplants.length": selectedTransplants.length,
        isAllTransplantsChecked,
      });

      newState["transplantAll"].checked = isAllTransplantsChecked;
    } else {
      dependentTransplantInputs.forEach((controlName) => (newState[controlName].checked = checked));
    }

    onChange(newState);
  };
  const classes = Style();

  return (
    <Grid component={component} className={`${classes.root} ${className}`}>
      <FormControl component="form">
        <Typography variant="h2" className={classes.title}>
          Количество пересадок
        </Typography>
        <FormGroup>
          {transplants.map((name) => (
            <FormControlLabel
              key={state[name].value}
              control={
                <Checkbox
                  checked={state[name].checked}
                  onChange={handleChange}
                  name={name}
                  value={state[name].value}
                />
              }
              label={state[name].label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Grid>
  );
}

export default FilterLeft;
export { transplantsInitialState, transplantPositions, getTransplants } from "./api.js";
