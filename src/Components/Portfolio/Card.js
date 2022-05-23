import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const { item } = props;
  return (
    <div className={classes.card}>
      <img className={classes.itemImage} src={item.image} alt={item.title} />

      <div className={classes.techsUsed}>
        {item.techsUsed.map((tech, index) => (
          <span
            className={index === 0
                ? "tech html"
                : index === 1
                ? "tech css"
                : index === 2
                ? "tech js"
                : index === 3
                ? "tech react"
                : 'tech'
            }
            key={index}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className={classes.details}>
        <p className={classes.date}>{item.created}</p>
        <h2 className={classes.title}>{item.title}</h2>
        <p className={classes.description}>{item.description}</p>

        <div className='btns' target="_blank">
        <i className="uil uil-github"></i> 
            <button><a href={item.url}>Live view</a></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
