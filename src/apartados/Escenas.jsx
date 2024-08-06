// Escenas.jsx
import React, { useState, useEffect } from "react";
import "../css/escenas.css"; // Asegúrate de crear este archivo de CSS para tus estilos

const Escenas = () => {
    const defaultScenes = [
        { nombre: "Cerrado", imagen: "/cortina-cerrada.svg" },
        { nombre: "Abierto", imagen: "/cortina-abierta.svg" },
        { nombre: "Entreabierto", imagen: "/cortina-entreabierta.svg" }
    ];

    const [customScenes, setCustomScenes] = useState([]);
    const [newSceneName, setNewSceneName] = useState("");
    const [newScenePercentage, setNewScenePercentage] = useState(50);
    const [width, setWidth] = useState(75); // Inicialmente, la mitad del contenedor

    useEffect(() => {
        // Actualizar el tamaño de las partes izquierda y derecha según el porcentaje
        const newWidth = newScenePercentage * 2.39;
        setWidth(newWidth);
    }, [newScenePercentage]);

    const handleCreateScene = () => {
        const newScene = {
            nombre: newSceneName,
            porcentaje: newScenePercentage,
            // No necesitamos concatenar las rutas, simplemente usamos las rutas individuales de las imágenes
            imagenes: {
                agarradera: "/agarradera.png",
                izquierda: "/izquierda.png",
                derecha: "/derecha.png"
            }
        };

        setCustomScenes([...customScenes, newScene]);
        setNewSceneName("");
        setNewScenePercentage(50);
    };



    const handlePercentageChange = (e) => {
        const newPercentage = e.target.value;
        setNewScenePercentage(newPercentage);
    };

    return (
        <div className="escenas-container">
            <h2>Escenas Predeterminadas</h2>
            <div className="default-scenes">
                {defaultScenes.map((scene) => (
                    <div key={scene.nombre} className="scene">
                        <img src={scene.imagen} alt={scene.nombre} />
                        <p>{scene.nombre}</p>
                    </div>
                ))}
            </div>

            <h2>Escenas Personalizadas</h2>
            {customScenes.map((scene, index) => (
                <div key={index} className="scene">
                    {/* Renderizamos las tres imágenes juntas */}
                    <img src={scene.imagenes.agarradera} alt="Agarradera" className="agarradera" />
                    <img
                        src={scene.imagenes.izquierda}
                        alt="Cortina izquierda"
                        className="izquierda"
                        style={{ height: "250px", width: `${(scene.porcentaje / 100) * width}px` }}
                    />
                    <img
                        src={scene.imagenes.derecha}
                        alt="Cortina derecha"
                        className="derecha"
                        style={{ height: "250px", width: `${(scene.porcentaje / 100) * width}px` }}
                    />
                    <p className="scene-name">{scene.nombre} ({scene.porcentaje}%)</p>
                </div>
            ))}


            <button onClick={() => document.getElementById('create-scene-form').scrollIntoView()}>Crear nueva Escena</button>

            <div id="create-scene-form" className="create-scene-form">
                <h2>Crear Nueva Escena</h2>
                <label>
                    Nombre de la escena:
                    <input
                        type="text"
                        value={newSceneName}
                        onChange={(e) => setNewSceneName(e.target.value)}
                    />
                </label>
                <label>
                    Porcentaje de cierre:
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={newScenePercentage}
                        onChange={handlePercentageChange}
                    />
                    {newScenePercentage}%
                </label>
                <button className="button-crearEscena" onClick={handleCreateScene}>Crear Escena</button>
            </div>
            <div className="crearEscenaCortina">
                <div className="cortina-container">
                    <img className="agarradera" src="/agarradera.png" alt="Agarradera" />
                    <img id="derecha" className="derecha" src="/derecha.png" alt="Cortina derecha" style={{ height: "250px", width: `${width}px` }} />
                    <img id="izquierda" className="izquierda" src="/izquierda.png" alt="Cortina izquierda" style={{ height: "250px", width: `${width}px` }} />
                </div>
            </div>
        </div>
    );
};

export default Escenas;




