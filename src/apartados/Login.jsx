import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/login.css";

const Login = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const form = event.target;
      const formData = new FormData(form);
  
      try {
        if (isRegistering) {
          // Registro
          await axios.post('http://localhost:8085/api/usuarios/registro', {
            username: formData.get('username'),
            email: formData.get('email'),
            fullName: formData.get('fullName'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
            telefono: formData.get('telefono'),
            direccion: formData.get('direccion'),
            // Aquí puedes añadir la lógica para la foto de perfil si lo deseas
          });
          console.log('Usuario registrado exitosamente');
          navigate('/'); // Redirige al inicio después del registro exitoso
        } else {
          // Inicio de sesión
          await axios.post('http://localhost:8085/api/usuarios/login', {
            usuario: formData.get('usuario'),
            password: formData.get('password'),
          });
          console.log('Inicio de sesión exitoso');
          navigate('/'); // Redirige al inicio después del inicio de sesión exitoso
        }
      } catch (error) {
        console.error('Error:', error.response.data);
        // Aquí puedes manejar errores como mostrar un mensaje al usuario
      }
    };
  
    return (
      <div className="login-app">
        <div className="login-background"></div>
        <div className="login-form-container">
          <h1>{isRegistering ? 'Registro' : 'Login'}</h1>
          <form onSubmit={handleSubmit}>
            {isRegistering ? (
              <>
                <input type="text" name="username" placeholder="Nombre de usuario" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="fullName" placeholder="Nombre completo" required />
                <input type="password" name="password" placeholder="Contraseña" required />
                <input type="password" name="confirmPassword" placeholder="Confirmar contraseña" required />
                <input type="tel" name="telefono" placeholder="Teléfono" required />
                <input type="text" name="direccion" placeholder="Dirección" required />
                {/* Aquí puedes añadir el input para la foto de perfil si lo deseas */}
              </>
            ) : (
              <>
                <input type="text" name="usuario" placeholder="Usuario" required />
                <input type="password" name="password" placeholder="Contraseña" required />
              </>
            )}
            <button type="submit">{isRegistering ? 'Registrar' : 'Iniciar Sesión'}</button>
          </form>
          <p>
            {isRegistering ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
            <span onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? ' Inicia sesión' : ' Regístrate'}
            </span>
          </p>
        </div>
      </div>
    );
  };

export default Login;