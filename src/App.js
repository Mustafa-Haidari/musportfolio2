import React from "react";
import "./App.css";
import MyArt from "./Components/ArtWork/MyArt";
import Header from "./Components/Header/Header";
import Menu from "./Components/Header/Menu";
import Portfolio from "./Components/Portfolio/Portfolio";
import PortfolioData from "./PortfolioData";

function App() {
  const searchHandler = (event) => {
    console.log(event);
  };

  return (
    <React.Fragment>
      <Header />

      <Menu searchHandler={searchHandler} />

      <Portfolio items={PortfolioData} />

      <MyArt />
      <footer>
        <div>
          <p>Mustafa Haidari</p>
          <p>Mustafa Haidari</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
