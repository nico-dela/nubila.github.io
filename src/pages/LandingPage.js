import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="container">
      <header>
        <h1>Nubila</h1>
        <nav>
          <ul>
            <li><a href="#about">Acerca</a></li>
            <li><a href="#music">Material</a></li>
            <li><a href="#tour">Fechas</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>Acerca</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu libero ligula. Phasellus ac massa a nunc eleifend placerat. Ut cursus cursus dui ut consectetur.</p>
        </section>
        <section id="music">
          <h2>Música</h2>
          <div>
            <h3>Título de la canción 1</h3>
            <audio controls>
              <source src="song1.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <div>
            <h3>Título de la canción 2</h3>
            <audio controls>
              <source src="song2.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </section>
        <section id="tour">
          <h2>Fechas</h2>
          <p>Echa un vistazo a nuestras próximas fechas de gira y únete a nosotros en un concierto cerca de ti:</p>
          <ul>
            <li>Ciudad 1 - Fecha</li>
            <li>Ciudad 2 - Fecha</li>
            <li>Ciudad 3 - Fecha</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contacto</h2>
          <p>¡Nos encantaría saber de ti! Envíanos un mensaje a example@example.com o conéctate con nosotros en las redes sociales:</p>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Indie Band Name. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
