import React, { Fragment } from "react";
import Container from "../UI/Container";
import Card from "./Card";
import classes from "./Portfolio.module.css";

const Portfolio = (props) => {
  const { items } = props;
  return (
    <Container>
      <div className={classes.portfolio}>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Portfolio;
