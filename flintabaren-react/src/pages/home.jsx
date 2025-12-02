    const Home = () => {
  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="logo" aria-label="Flintabaren startsida">FLINTABAREN</a>
          <div id="nav-toggle" className="hamburger" role="button" aria-label="Öppna meny" tabIndex="0">
            <span></span><span></span><span></span>
          </div>
          <nav id="site-nav" className="main-nav" aria-label="Huvudmeny">
            <ul>
              <li><a href="meny.html">meny</a></li>
              <li><a href="oppettider.html">öppettider</a></li>
              <li><a href="hitta.html">hitta hit</a></li>
              <li><a href="om-oss.html">om oss</a></li>
            </ul>
          </nav>
          <a href="bestall.html" className="btn btn-primary">beställ online</a>
        </div>
      </header>

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
      <a href="bestall.html" className="cart-fab" aria-label="Beställ online" title="Beställ online">
        <img src="/Media/shopping-cart.svg" alt="" aria-hidden="true" />
      </a>
    </div>
  );
};

export default Home;