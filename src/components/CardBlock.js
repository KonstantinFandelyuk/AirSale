import React from "react";
import Switcher from "./Switcher";
import CardList from "./Card";
import { Box } from "@material-ui/core";

function CardBlock({ className, transplants, costData, speedData }) {
  console.log({ transplants });

  return (
    <Box className={className} display="flex" flexDirection="column">
      <Switcher costData={costData} speedData={speedData} />
      <CardList />
    </Box>
  );
}

export default CardBlock;
