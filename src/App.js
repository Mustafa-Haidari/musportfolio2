import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import PortfolioData from "./PortfolioData";

function App() {

  return (
    <React.Fragment>
      <Header />

      <Portfolio items={PortfolioData} />

      <footer>
        <div>
          <p>Mustafa Haidari</p>
          <p>Brisbane, Australia</p>
          <p>mhaidarpoor@gmail.com</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
