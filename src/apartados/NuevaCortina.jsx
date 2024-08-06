// NuevaCortina.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/article.css";
import "../css/nuevaCortina.css";

const NuevaCortina = ({ setCortinas }) => {
    const [nombreCortina, setNombreCortina] = useState('');
    const [cortinaSeleccionada, setCortinaSeleccionada] = useState('');
    const [imagenCortina, setImagenCortina] = useState(null);
    const [sinOpciones, setSinOpciones] = useState(false);
    const navigate = useNavigate(); // Hook para redirigir

    const handleSubmit = (event) => {
        event.preventDefault();

        // Crear un objeto URL para la imagen
        const imagenURL = imagenCortina ? URL.createObjectURL(imagenCortina) : null;

        // Crear el objeto de la nueva cortina
        const nuevaCortina = { nombre: nombreCortina, imagen: imagenURL };

        // Actualizar el estado de las cortinas con la nueva cortina agregada
        setCortinas(prevCortinas => [...prevCortinas, nuevaCortina]);

        // Redirigir a la página de inicio
        navigate('/');
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImagenCortina(file);
    };


    return (
        <>
            <div className="Article">
                <section className="inknut-antiqua-regular Section">
                    "Tu hogar, tus reglas, tus cortinas. ¡Añade una nueva!”
                </section>
            </div>
            <div className="Formulario">
                <form className="inknut-antiqua-regular Formulario-NuevaCortina" onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre de la cortina:</label>
                    <input type="text" id="nombre" value={nombreCortina} onChange={(event) => setNombreCortina(event.target.value)} required />

                    <label htmlFor="cortina">Selecciona una cortina:</label>
                    <select id="cortina" value={cortinaSeleccionada} onChange={(event) => setCortinaSeleccionada(event.target.value)} required>
                        <option value="">Selecciona una cortina</option>
                        {/* Aquí puedes mapear las opciones de las cortinas disponibles */}
                        <option value="cortina1">Cortina 1</option>
                        <option value="cortina2">Cortina 2</option>
                        <option value="cortina3">Cortina 3</option>
                    </select>

                    <label htmlFor="imagen">¿Tienes una foto de la cortina? ¡Súbela!:</label>
                    <input type="file" id="imagen" accept="image/*" onChange={handleFileChange} />

                    <div>
                        <input type="checkbox" id="sinOpciones" checked={sinOpciones} onChange={(event) => setSinOpciones(event.target.checked)} />
                        <label htmlFor="sinOpciones">No hay más opciones disponibles</label>
                    </div>

                    <button type="submit">Agregar Cortina</button>
                </form>
            </div>
        </>
    );
};
export default NuevaCortina;