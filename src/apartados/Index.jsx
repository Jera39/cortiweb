// Index.jsx
import React, { useState, useEffect } from 'react';
import Article from '../components/Article'
import Cortina from '../components/Cortina'

const Index = ({ cortinas, setCortinas }) => {
    const [listaCortinas, setListaCortinas] = useState(cortinas);

    useEffect(() => {
        setListaCortinas(cortinas);
    }, [cortinas]);

    const handleDelete = (nombreCortina) => {
        const updatedCortinas = listaCortinas.filter(cortina => cortina.nombre !== nombreCortina);
        setListaCortinas(updatedCortinas);
        setCortinas(updatedCortinas); // Actualizar el estado global de cortinas
    };

    return (
        <>
            <Article />
            <div className="CardCortina">
                {listaCortinas.map(cortina => (
                    <Cortina
                        key={cortina.nombre}
                        nombre={cortina.nombre}
                        imagen={cortina.imagen}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </>
    );
};
export default Index;