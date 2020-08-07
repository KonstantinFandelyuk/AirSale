import React from "react";
import FilterTop from "./FilterTop";
import CardList from "./Card";
import { Box } from "@material-ui/core";
function CardBlock() {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <FilterTop />
        <CardList />
      </Box>
    </>
  );
}

export default CardBlock;
