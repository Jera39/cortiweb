// Cortina.jsx
import React, { useState } from 'react';
import "../css/cortina.css";
import cortinaDefault from "../img/cortina.jpg";


const Cortina = ({ nombre, imagen, onDelete }) => {
  const [deleteIcon, setDeleteIcon] = useState("/delete-offClic.svg");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    const confirmed = window.confirm(`¿Estás seguro de que deseas eliminar la cortina "${nombre}"?`);
    if (confirmed) {
      onDelete(nombre);
    } else {
      setDeleteIcon("/delete-offClic.svg"); // Reset icon if deletion is cancelled
      setIsDeleting(false); // Reset isDeleting if deletion is cancelled
    }
  };

  const handleMouseDown = () => {
    setDeleteIcon("/delete-onClic.svg");
    setIsDeleting(true);
  };

  const handleMouseUp = () => {
    setDeleteIcon("/delete-offClic.svg");
    setIsDeleting(false);
  };

  return (
    <div className="Cortina">
      <section className="Cortina-section">
      <img
          src={imagen || cortinaDefault}
          alt="Cortina"
          className={`Cortina-section-img ${isDeleting ? 'deleting' : ''}`}
        />
        <section className="Cortina-section-nombre">
          {nombre}
        </section>
        <img
          src={deleteIcon}
          alt="Delete Icon"
          className="deleteIcon"
          onClick={handleDelete}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      </section>
    </div>
  );
};
export default Cortina;