import React from "react";
import DecoCard from "../Card/DecoCard"; // Asegúrate de que el nombre del componente sea correcto
import "./Render.css";
import DataGeneral from "../DataProduct/DataGeneral";

// const RenderDeco = ({ categoria }) => {
//   const items = DataGeneral[categoria] || []; // Obtiene los elementos de la categoría especificada
const RenderDeco = ({ categoria, filteredProducts = [] }) => {
  const items = filteredProducts.length > 0 ? filteredProducts : DataGeneral[categoria] || [];

  // Determina el tipo de enlace basado en la categoría
  const linkType = categoria === "navidad" ? "navidad" : "deco"; // Ajusta según tus categorías

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
              type={linkType} // Pasa el tipo de enlace
            />
          );
        })}
      </div>
    </div>
  );
};

export default RenderDeco;