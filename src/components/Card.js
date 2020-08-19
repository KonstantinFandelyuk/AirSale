import React from "react";
import { Grid } from "@material-ui/core";
import CardStyle from "./Style/CardStyle";
import { renderTicketDate } from "../api/tickets";

function Card({ ticket }) {
  const timeConvert = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration) - hours * 60;
    return `${hours}ч:${minutes}м`;
  };

  const switchLetter = (leng) => {
    let zeroStops = "Пересадок";
    let oneStops = "Пересадка";
    let moreStops = "Пересадки";
    if (leng <= 0 || leng >= 5) {
      return zeroStops;
    }
    if (leng === /(^[1]{1}$|^[2-9]{1}[1-1]{1}$|^101$)/) {
      return oneStops;
    }
    if (leng === /(^[2-4]{1}$|^[2-9]{1}[2-4]{1}$|^101$)/) {
      return moreStops;
    }
  };

  const classes = CardStyle();
  const { price, carrier, segments } = ticket;

  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.itemPrice}>
        <Grid item xs={5} className={classes.sum}>
          {`${price} p`}
        </Grid>
        <Grid item xs={5}>
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="" />
        </Grid>
      </Grid>
      {segments.length > 0 &&
        segments.map(({ date, destination, duration, origin, stops }, id) => (
          <Grid key={id} container className={classes.itemInformation}>
            <Grid item xs={3}>
              <div className={classes.title}>
                {origin} – {destination}
              </div>
              <div>{renderTicketDate(date, duration)}</div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.title}>В пути</div>
              <div>{timeConvert(duration)}</div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.title}>
                {stops.length} {switchLetter(stops.length)}
              </div>
              <div>{stops.join(", ")}</div>
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
}

export default Card;
