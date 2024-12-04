import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./DecoCard.css";

const DecoCard = (props) => {
  const [hovered, setHovered] = useState(false);
  
  // Verifica si imgsrc está definido y tiene al menos un elemento
  const primeraImagen = props.imgsrc && props.imgsrc.length > 0 ? props.imgsrc[0] : null;

  return (
    <div className="project-card" style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
      <Link to={`/deco/${props.id}`} style={{ textDecoration: "none" }}>
        {primeraImagen ? (
          <img
            src={primeraImagen}
            alt="imagen"
            style={{
              width: '100%', // Asegúrate de que la imagen ocupe todo el ancho del contenedor
              height: 'auto',
              opacity: hovered ? 0.8 : 1,
              borderRadius: '10px 10px 0px 0px', // Borde redondeado solo en la parte superior
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        ) : (
          <div style={{ width: '100%', height: '150px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px 10px 0px 0px' }}>
            <p>No hay imagen disponible</p>
          </div>
        )}
        <div className="project-details" style={{ padding: '10px', backgroundColor: '#e0e0e0', textAlign: 'center', borderRadius: '0px 0px 10px 10px' }}>
          <p className="project-title">{props.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default DecoCard;