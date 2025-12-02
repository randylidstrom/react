import Header from '../components/Header.jsx';
import CartButton from '../components/CartButton.jsx';

const Home = () => {
  return (
    <div>
      <Header />

      <main>
        <section className="hero" aria-label="Introduktion">
          <video id="heroVideo" className="hero-video" autoPlay muted loop playsInline preload="auto">
            <source src="/Media/hero.mp4" type="video/mp4" />
            Din webbläsare stödjer inte video-taggen.
          </video>
          
          <img src="/Media/hero.jpeg" alt="Pizzabakgrund" className="hero-fallback" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true"></div>
          
          <div id="playPauseBtn" className="pause-btn" aria-label="Pausa video" role="button" tabIndex="0">
            <span></span>
            <span></span>
          </div>
        </section>
      </main>

      {/* Mobile floating cart button */}
      <CartButton />
    </div>
  );
};

export default Home;