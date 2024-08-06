// About.jsx
import React from "react";
import '../css/about.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container-cont">
                <div className="about-content">
                    <h2>Acerca de Udeom</h2>
                    <p>
                        Udeom nació de mi amor por la tecnología y mi deseo de crear soluciones prácticas para problemas cotidianos. Inspirado por momentos especiales de mi vida, Udeom representa mi compromiso de transformar ideas en herramientas útiles y accesibles para todos.
                    </p>
                    <h3>uCurtains: El primer paso de un largo camino</h3>
                    <p>
                        Mi primer proyecto, uCurtains, es un sistema de gestión de cortinas inteligente que surgió de mi propia necesidad de simplificar una tarea diaria. Este proyecto es solo el comienzo de mi viaje en Udeom, donde espero crear muchas más soluciones innovadoras.
                    </p>
                    <h3>Mi pasión por la tecnología</h3>
                    <p>
                        Me apasiona la capacidad de la tecnología para mejorar nuestras vidas y resolver problemas de manera creativa. Me fascina la parte visual del desarrollo de software y disfruto explorando nuevas tecnologías como la inteligencia artificial. Mi curiosidad insaciable me impulsa a seguir aprendiendo y experimentando con nuevas ideas.
                    </p>
                    <h3>Mi visión para Udeom</h3>
                    <p>
                        Sueño con que Udeom se convierta en una comunidad vibrante donde podamos compartir conocimientos, colaborar en proyectos y apoyarnos mutuamente. Quiero crear un espacio donde mis creaciones puedan ayudar a otros a superar desafíos cotidianos y donde podamos aprender y crecer juntos.
                    </p>
                    <h3>Únete a mí en esta aventura</h3>
                    <p>
                        Te invito a explorar uCurtains y a seguirme en este emocionante viaje tecnológico. Juntos, podemos construir una comunidad apasionada por la innovación y el deseo de hacer del mundo un lugar mejor.
                    </p>
                    <p className="welcome">¡Bienvenidos a Udeom!</p>
                </div>
                <div className="about-image">
                    {/* <img src={tuFoto} alt="Tu Nombre" /> */}
                </div>
            </div>
        </section>
    );
};
export default About;