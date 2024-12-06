import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import DataGeneral from '../DataProduct/DataGeneral';
import "./Detalle.css";
import CloseIcon from '@mui/icons-material/Close';
import { useSwipeable } from 'react-swipeable';



  const Detalle = () => {
    const { id, categoria } = useParams();
    const [imagenActual, setImagenActual] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
  
    // Busca el servicio en la categoría
    const casa = DataGeneral["navidad"]?.find((item) => item.id === Number(id));
  
    if (!casa) {
      console.log("Producto no encontrado", id, categoria);
      return <div>No se encontró el servicio.</div>;
    }
  
    const cambiarImagen = (direccion) => {
      if (direccion === "prev") {
        setImagenActual((prev) => (prev > 0 ? prev - 1 : casa.imgsrc.length - 1));
      } else if (direccion === "next") {
        setImagenActual((prev) => (prev < casa.imgsrc.length - 1 ? prev + 1 : 0));
      }
    };
  
    const abrirModal = () => {
      setModalVisible(true);
    };
  
    const cerrarModal = () => {
      setModalVisible(false);
    };
  
    const irImagenAnterior = () => {
      setImagenActual((prev) => (prev - 1 + casa.imgsrc.length) % casa.imgsrc.length);
    };
  
    const irImagenSiguiente = () => {
      setImagenActual((prev) => (prev + 1) % casa.imgsrc.length);
    };
  
    const handleClickModal = (e) => {
      if (e.target.classList.contains("modal-background")) {
        cerrarModal();
      }
    };
  
    // useEffect(() => {
    //   const handleKeyboardNavigation = (event) => {
    //     if (modalVisible) {
    //       if (event.key === "Escape") {
    //         cerrarModal();
    //       } else if (event.key === "ArrowLeft") {
    //         irImagenAnterior();
    //       } else if (event.key === "ArrowRight") {
    //         irImagenSiguiente();
    //       }
    //     }
    //   };
  
    //   // Bloquear desplazamiento del fondo
    //   if (modalVisible) {
    //     document.body.style.overflow = "hidden";
    //   } else {
    //     document.body.style.overflow = "auto";
    //   }
  
    //   window.addEventListener("keydown", handleKeyboardNavigation);
  
    //   return () => {
    //     window.removeEventListener("keydown", handleKeyboardNavigation);
    //     document.body.style.overflow = "auto"; // Restaurar desplazamiento
    //   };
    // }, [modalVisible, cerrarModal, irImagenAnterior, irImagenSiguiente]);
    useEffect(() => {
      const handleKeyboardNavigation = (event) => {
          if (modalVisible) {
              if (event.key === 'Escape') {
                  cerrarModal();
              } else if (event.key === 'ArrowLeft') {
                  irImagenAnterior();
              } else if (event.key === 'ArrowRight') {
                  irImagenSiguiente();
              }
          }
      };

      window.addEventListener('keydown', handleKeyboardNavigation);
      return () => {
          window.removeEventListener('keydown', handleKeyboardNavigation);
      };
  }, [modalVisible]);
  
    const handlers = useSwipeable({
      onSwipedLeft: () => cambiarImagen("next"),
      onSwipedRight: () => cambiarImagen("prev"),
    });
  
    const handlersForModal = useSwipeable({
      onSwipedLeft: irImagenSiguiente,
      onSwipedRight: irImagenAnterior,
    });
  
    return (
      <div className="detalle-f">
        <div className="imagenes-container" style={{ position: "relative" }} {...handlers}>
          <div className="slider-container">
            {casa.imgsrc.map((item, idx) => (
              <li key={idx} style={{ display: idx === imagenActual ? "block" : "none" }}>
                <img
                  src={item}
                  alt={`Imagen ${idx + 1}`}
                  onClick={abrirModal} // Este evento abre el modal
                  style={{ cursor: "pointer" }} // Opcional: cambiar el cursor para indicar interactividad
                />
              </li>
            ))}
            <div className="dot-container">
              {casa.imgsrc.map((_, idx) => (
                <div key={idx}></div>
              ))}
            </div>
          </div>
        </div>
  
        {modalVisible && (
          <div className="modal-background" onClick={handleClickModal} {...handlersForModal}>
            {/* Botones para cambiar de imagen */}
            <div className="modal-arrow modal-arrow-left" onClick={irImagenAnterior}>
              {/* <ArrowBackIosNewIcon size={50} style={{ color: "#d6d2d2", fontSize: "large" }} /> */}
            </div>
            <div className="modal-arrow modal-arrow-right" onClick={irImagenSiguiente}>
              {/* <ArrowForwardIosIcon size={50} style={{ color: "#d6d2d2", fontSize: "large" }} /> */}
            </div>
            {/* Números de la imagen */}
            {/* <div className="image-counter">{`${imagenActual + 1}/${casa.imgsrc.length}`}</div> */}
            {/* Botón para cerrar el modal */}
            <div className="modal-close" onClick={cerrarModal}>
              <CloseIcon size={50} style={{ color: "" }} />
            </div>
            {/* Imagen actual */}
            <img
              className="imagen-modal"
              src={casa.imgsrc[imagenActual]}
              alt={`Imagen ${imagenActual + 1}`}
            />
          </div>
        )}
        <div className="pepe">
          <h3>{casa.name}</h3>
          <p>{casa.descripcion}</p>
        </div>
      </div>
    );
  };
  
  export default Detalle;