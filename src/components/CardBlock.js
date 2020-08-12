import React from "react";
// import FilterTop from "./FilterTop";
import Switcher from "./Switcher";
import CardList from "./Card";
import { Box } from "@material-ui/core";

function CardBlock({ className, transplants }) {
  console.log({ transplants });

  return (
    <Box className={className} display="flex" flexDirection="column">
      <Switcher />
      <CardList />
    </Box>
  );
}

export default CardBlock;
