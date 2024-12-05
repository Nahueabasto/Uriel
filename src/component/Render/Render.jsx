import React from "react";
import DecooCard from "../Card/DecooCard";
import "./Render.css";
import DataGeneral from "../DataProduct/DataGeneral";
import DecoCard from "../Card/DecoCard";

const RenderDeco = ({ categoria }) => {
  const items = DataGeneral[categoria] || []; // Obtiene los elementos de la categoría especificada

  return (
    <div className="CardProduct-container">
      <div className="project-container">
        {items.map((val, ind) => {
          return (
            <DecoCard
              id={val.id}
              key={ind}
              imgsrc={val.imgsrc}
              name={val.name}
              descripcion={val.descripcion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RenderDeco;