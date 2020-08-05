import React from "react";
import FilterTop from "./FilterTop";
import Card from "./Card";
import { Box } from "@material-ui/core";
function CardBlock() {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <FilterTop />
        <Card />
      </Box>
    </>
  );
}

export default CardBlock;
