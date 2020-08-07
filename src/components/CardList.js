import React from "react";
import Card from "./Card";
import { Box } from "@material-ui/core";
function CardList({ data }) {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Card cart={data} />
      </Box>
    </>
  );
}

export default CardList;
