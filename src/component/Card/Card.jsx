import React from "react";
// Estilos
import "./Card.css";

const Card = (props) => {
    return (
      <div className="project-card">
        <a href={props.deploy} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <img src={props.imgsr} alt="imagen" />
          <h3 className="project-title">{props.name}</h3>
          <div className="pro-details">
          </div>
        </a>
      </div>
    );
  };

export default Card;