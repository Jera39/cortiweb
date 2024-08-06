import styles from '../css/header.css';

<header>
<h1 className={styles['karla-bold']}>Udeom</h1>
    <nav className="Sections">
        <Link to="/">Cortinas</Link>
        <Link to="/nuevaCortina">Nueva Cortina</Link>
        <Link to="/escenas">Escenas</Link>
        <Link to="/about">About</Link>
    </nav>
    <div className="Login">
        {isLoggedIn ? (
            <div className="MenuItem">
                <p>{username}</p>
                <button onClick={handleLogout}>Cerrar Sesión</button>
                {/* ... más opciones de usuario ... */}
            </div>
        ) : (
            <button onClick={handleLogin}>Iniciar Sesión</button>
        )}
    </div>
</header>