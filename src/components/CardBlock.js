import React from "react";
import FilterTop from "./FilterTop";
import { Box } from "@material-ui/core";
function CardBlock() {
  return (
    <>
      <Box display="flex" flexDirection="colum">
        <FilterTop />
      </Box>
    </>
  );
}

export default CardBlock;
