import React from "react";
import FilterLeft from "../../components/FilterLeft";
import CardBlock from "../../components/CardBlock";
import { Typography, Container, Box } from "@material-ui/core";
import HomeStyle from "../../style/HomeStyle";
import data from "../../data/cart.json";
function Home() {
  const classes = HomeStyle();

  return (
    <>
      <Container className={classes.root}>
        <Typography variant="h1" className={classes.h1}>
          Air Sale
        </Typography>
        <main>
          <Box className={classes.content}>
            <div className={classes.first_item}>
              <aside>
                <FilterLeft />
              </aside>
            </div>
            <div className={classes.second_item}>
              <CardBlock data={data.cart} />
            </div>
          </Box>
        </main>
      </Container>
    </>
  );
}

export default Home;
