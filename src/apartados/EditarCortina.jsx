// EditarCortina.jsx
import React, { useState } from 'react';
import '../css/editarCortina.css';

const EditarCortina = () => {
  const [estado, setEstado] = useState(100);

  const handlePresetClick = (value) => {
    setEstado(value);
  };

  const handleSliderChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <>
      <div className="curtain-control">
        <div className='NombreEditarCortina'>
          <h1>Nombre de la Cortina</h1>
        </div>
        <div className='editarCortinaCard'>
          <div className='editarCortinaIzquierda'>
            <div className="preset-buttons">
              <h2>Escenas predeterminadas</h2>
              <button className='buttonEditarCortina' onClick={() => handlePresetClick(0)}>Abrir</button>
              <button className='buttonEditarCortina' onClick={() => handlePresetClick(100)}>Cerrar</button>
              <button className='buttonEditarCortina' onClick={() => handlePresetClick(50)}>Entreabrir</button>
            </div>
            <div className="my-scenes">
              <h2>Mis Escenas:</h2>
              <button className='buttonEditarCortina' onClick={() => handlePresetClick(20)}>Escena1</button>
              <button className='buttonEditarCortina' onClick={() => handlePresetClick(40)}>2</button>
              <button className='buttonEditarCortina' onClick={() => handlePresetClick(80)}>Escena Grande 3</button>
            </div>
          </div>
          <div className='editarCortinaMedio'>
            <div className="curtain-display">
              <div className="curtain" style={{ height: `${estado}%` }}></div>
              <p>Estado: {estado}%</p>
            </div>
          </div>
          <div className='editarCortinaDerecha'>
            <div className="slider-control">
              <h2>Control de cierre</h2>
              <input
                type="range"
                min="0"
                max="100"
                value={estado}
                onChange={handleSliderChange}
              />
              <p>Desliza para ajustar el nivel de cierre.</p>
              <button className='buttonEditarCortina' onClick={() => handlePresetClick(estado)}>Seleccionar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarCortina;
