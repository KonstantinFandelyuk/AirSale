import React from "react";
import { Grid } from "@material-ui/core";
import CardStyle from "./Style/CardStyle";
function Card({ props }) {
  const classes = CardStyle();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid container className={classes.itemPrice}>
          <Grid item xs={5} className={classes.sum}>
            13 000p
          </Grid>
          <Grid item xs={5}>
            <img src="/image/Logo.png" alt="" />
          </Grid>
        </Grid>
        <Grid container className={classes.itemInformation}>
          <Grid item xs={3}>
            <div className={classes.title}>MOW – HKT</div>
            <div>10:45 – 08:00</div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.title}>В пути</div>
            <div>21ч 15м</div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.title}>1 пересадка</div>
            <div>HKG</div>
          </Grid>
        </Grid>
        <Grid container className={classes.itemInformation}>
          <Grid item xs={3}>
            <div className={classes.title}>MOW – HKT</div>
            <div>10:45 – 08:00</div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.title}>В пути</div>
            <div>21ч 15м</div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.title}>2 пересадки</div>
            <div>HKG, JNB</div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Card;
