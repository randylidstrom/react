import Header from '../components/Header';
import CartButton from '../components/CartButton';

const Hitta = () => {
  return (
    <div className="hitta-page">
      <Header />

      <main className="hitta-wrapper" aria-labelledby="hitta-title">
        <div className="hitta-card">
          <h1 id="hitta-title" className="hitta-title">HITTA HIT</h1>
          
          <p className="hitta-address">
            <a href="https://maps.app.goo.gl/91fXhxHFMS5YqqZ47" target="_blank" rel="noopener noreferrer" aria-label="Öppna adress i Google Maps">
              Omsjövägen, 881 70 Näsåker
            </a>
          </p>
          <p className="hitta-tagline">Precis vid riksväg 90</p>
          
          <figure className="hitta-map" aria-label="Karta över platsen">
            <iframe 
              className="hitta-map-frame" 
              title="Karta med Flintabarens läge" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1783.480924659451!2d16.89826540042038!3d63.448114749772685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467ace88047377bf%3A0x248980bf423f263!2sFlintabaren!5e0!3m2!1sen!2sse!4v1763463262098!5m2!1sen!2sse" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </figure>

          <section className="contact-section" aria-labelledby="kontakt-heading">
            <h2 id="kontakt-heading">Kontakt</h2>
            <p className="contact-intro">Frågor om större sällskap eller catering? Skicka ett meddelande så svarar vi så snart vi kan.</p>
            
            <form action="mailto:info@flintabaren.se" method="post" encType="text/plain">
              <div>
                <label htmlFor="namn">Namn</label>
                <input type="text" id="namn" name="namn" required />
              </div>
              <div>
                <label htmlFor="epost">E-post</label>
                <input type="email" id="epost" name="epost" required />
              </div>
              <div>
                <label htmlFor="meddelande">Meddelande</label>
                <textarea id="meddelande" name="meddelande" rows="5" required></textarea>
              </div>
              <button className="btn btn-primary" type="submit">Skicka</button>
            </form>
          </section>
        </div>
      </main>

      {/* Cart button */}
      <CartButton />
    </div>
  );
};

export default Hitta;