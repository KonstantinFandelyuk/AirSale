import React from "react";
import FilterLeft from "../../components/FilterLeft";
import { Typography, Container } from "@material-ui/core";
import HomeStyle from "../../style/HomeStyle";
function Home() {
  const classes = HomeStyle();
  return (
    <>
      <Container className={classes.root}>
        <Typography variant="h1" className={classes.h1}>
          Air Sale
        </Typography>
        <main>
          <div className="content">
            <div className="content__list">
              <div className="content__list-item">
                <aside>
                  <FilterLeft />
                </aside>
              </div>
              <div className="content__list-item"></div>
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}

export default Home;
