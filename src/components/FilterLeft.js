import React from "react";
import { Checkbox, FormGroup, FormControlLabel, Grid, Typography } from "@material-ui/core";
import FilterLeftStyle from "./Style/FilterLeftStyle";

function FilterLeft() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = FilterLeftStyle();
  return (
    <>
      <Grid className={classes.root}>
        <Typography className={classes.title}>Количество пересадок</Typography>
        <Grid container>
          <Grid item>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    value={""}
                  />
                }
                label="Все"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    value={""}
                  />
                }
                label="Без пересадок"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                    value={""}
                  />
                }
                label="1 пересадка"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedD}
                    onChange={handleChange}
                    name="checkedD"
                    value={""}
                  />
                }
                label="2 пересадка"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedE}
                    onChange={handleChange}
                    name="checkedE"
                    value={""}
                  />
                }
                label="3 пересадка"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default FilterLeft;
