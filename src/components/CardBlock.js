import React from "react";
import Switcher from "./Switcher";
import CardList from "./CardList";
import { Box } from "@material-ui/core";

function CardBlock({ className, onSortChange, sorting, tickets }) {
  // console.log('CardBlock', { tickets });

  return (
    <Box className={className} display="flex" flexDirection="column">
      <Switcher sorting={sorting} onSortChange={onSortChange} />
      <CardList tickets={tickets} />
    </Box>
  );
}

export default CardBlock;
