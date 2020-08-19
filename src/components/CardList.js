import React from "react";
import Card from "./Card";
import { Box } from "@material-ui/core";

function CardList({ tickets }) {
  // console.log("CardList", { tickets });

  return (
    <Box display="flex" flexDirection="column">
      {tickets.length > 0 && tickets.map((ticket, id) => <Card key={id} ticket={ticket} />)}
    </Box>
  );
}

export default CardList;
