// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Index from './apartados/Index';
import NuevaCortina from './apartados/NuevaCortina';
import Escenas from './apartados/Escenas';
import About from './apartados/About';
import EditarCortina from './apartados/EditarCortina';
import Login from './apartados/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Invitado");

  const [cortinas, setCortinas] = useState(() => {
    // Obtener cortinas desde el almacenamiento local o usar un array vacío si no existen
    const cortinasFromStorage = JSON.parse(localStorage.getItem('cortinas'));
    return cortinasFromStorage || [];
  });

  useEffect(() => {
    // Guardar cortinas en el almacenamiento local cada vez que cambien
    localStorage.setItem('cortinas', JSON.stringify(cortinas));
  }, [cortinas]);

  const handleLogin = () => {
    // Lógica para iniciar sesión y actualizar isLoggedIn y username
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión y actualizar isLoggedIn y username
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} username={username} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Index cortinas={cortinas} setCortinas={setCortinas} />} />
        <Route path="/nueva-cortina" element={<NuevaCortina setCortinas={setCortinas} />} />
        <Route path="/escenas" element={<Escenas />} />
        <Route path="/about" element={<About />} />
        <Route path="/editar-cortina" element={<EditarCortina />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
