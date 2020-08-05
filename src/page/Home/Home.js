import React from "react";
import FilterLeft from "../../components/FilterLeft";
function Home() {
  return (
    <>
      <header className="header">
        <h1>Air Sale</h1>
      </header>
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
    </>
  );
}

export default Home;
