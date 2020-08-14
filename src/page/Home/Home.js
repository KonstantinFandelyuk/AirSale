import React, { useState } from "react";
import FilterLeft from "../../components/FilterLeft";
import CardBlock from "../../components/CardBlock";
import { Typography, Container, Box } from "@material-ui/core";
import HomeStyle from "../../style/HomeStyle";
import data from "../../data/cart.json";

const transplantsInitialState = {
  transplantAll: {
    value: "all",
    label: "Все",
    checked: true,
  },
  transplant0: {
    value: 0,
    label: "Без пересадок",
    checked: true,
  },
  transplant1: {
    value: 1,
    label: "1 пересадка",
    checked: true,
  },
  transplant2: {
    value: 2,
    label: "2 пересадки",
    checked: true,
  },
  transplant3: {
    value: 3,
    label: "3 пересадки",
    checked: true,
  },
};
const transplantPositions = Object.keys(transplantsInitialState);

function getTransplants(transplants) {
  return transplantPositions.reduce((result, transplantName) => {
    if (transplantName !== "transplantAll" && transplants[transplantName].checked) {
      result.push(transplants[transplantName].value);
    }

    return result;
  }, []);
}

function Home() {
  const classes = HomeStyle();
  const [sortSpeed, setSortSpeed] = useState([]);
  const [sortCost, setSortCost] = useState([]);
  const [state, setState] = useState({ transplants: transplantsInitialState });
  const trnasplantChange = (transplants) => setState({ transplants });

  // console.log(data.cart);
  const costData = () => {
    const newDataCost = data.cart.sort((a, b) => (a.cost > b.cost ? 1 : -1));
    console.log(newDataCost);
    setSortCost([...newDataCost, sortCost]);
    return newDataCost;
  };

  const speedData = () => {
    const newDataSpeed = data.cart.sort((a, b) => (a.speed > b.speed ? 1 : -1));
    setSortSpeed([...newDataSpeed, sortSpeed]);
    return newDataSpeed;
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h1" className={classes.h1}>
        Air Sale
      </Typography>
      <main>
        <Box className={classes.content}>
          <FilterLeft
            state={state.transplants}
            transplants={transplantPositions}
            component="aside"
            className={classes.first_item}
            onChange={trnasplantChange}
          />
          <CardBlock
            costData={costData}
            speedData={speedData}
            transplants={getTransplants(state.transplants)}
            className={classes.second_item}
            data={data.cart}
          />
        </Box>
      </main>
    </Container>
  );
}

export default Home;
