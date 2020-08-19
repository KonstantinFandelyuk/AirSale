import React, { useState, useEffect } from "react";
import Transplants, {
  transplantsInitialState,
  transplantPositions,
  getTransplants,
} from "../../components/Transplants";
import CardBlock from "../../components/CardBlock";
import { Typography, Container, Box } from "@material-ui/core";
import HomeStyle from "../../style/HomeStyle";
import { getSearchId, getTickets } from "../../api/tickets";

function Home() {
  const classes = HomeStyle();
  const [transplants, setTransplants] = useState(transplantsInitialState);
  const [sorting, setSorting] = useState("speed");
  const [searchId, setSearchId] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [stopTickets, setStop] = useState(false);
  const trnasplantChange = (transplants) => setTransplants(transplants);
  const sortingChange = (sorting) => setSorting(sorting);

  useEffect(() => {
    // console.log("effect", searchId);
    if (!searchId) {
      getSearchId()
        .then(searchId => {
          setSearchId(searchId);

          return getTickets(searchId);
        })
        .then(data => {
          // console.log(data.tickets);
          setTickets(data.tickets);
          setStop(data.stop);
        });
    }
  });

  // console.log({ tickets, transplants, sorting });
  return (
    <Container className={classes.root}>
      <Typography variant="h1" className={classes.h1}>
        Air Sale
      </Typography>
      <main>
        <Box className={classes.content}>
          <Transplants
            state={transplants}
            transplants={transplantPositions}
            component="aside"
            className={classes.first_item}
            onChange={trnasplantChange}
          />
          <CardBlock
            onSortChange={sortingChange}
            sorting={sorting}
            className={classes.second_item}
            tickets={tickets}
          />
        </Box>
      </main>
    </Container>
  );
}

export default Home;
