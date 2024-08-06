// Header.jsx
import React, { useState, useEffect  } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/header.css';

const Header = ({ isLoggedIn, username, handleLogin, handleLogout }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Cerrar el menú cuando se cambia de página
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]); // Se ejecuta cada vez que cambia la ubicación

    return (
        <header>
            <div className='menu-icon' onClick={toggleMenu}>
                &#9776;
            </div>
            <h1 className='karla-bold Logo'>uCurtains</h1>
            <section className='Section'>
                <nav className={`dm-sans-medium Sections ${menuOpen ? 'show' : ''}`}>
                    <Link to="/" className='Section-Header'>Cortinas</Link>
                    <Link to="/nueva-cortina" className='Section-Header'>Nueva Cortina</Link>
                    <Link to="/escenas" className='Section-Header'>Escenas</Link>
                    <Link to="/about" className='Section-Header'>About</Link>
                </nav>
                <div className={isLoggedIn ? "Login LoggedIn" : "Login"}>
                    {isLoggedIn ? (
                        <div className="MenuItem">
                            <p>{username}</p>
                            <button onClick={handleLogout}>Cerrar Sesión</button>
                            {/* ... más opciones de usuario ... */}
                        </div>
                    ) : (
                        <button className='dm-sans-medium buttonAcceder' onClick={handleLogin}>Acceder</button>
                    )}
                </div>
            </section>
        </header>
    );
};

export default Header;
