import Header from '../components/Header';
import CartButton from '../components/CartButton';

const Bestall = () => {
  return (
    <div className="order-page">
      <Header />

      <main className="order-wrapper">
        <div className="order-hero" aria-hidden="true"></div>
        
        <div className="order-card">
          <div className="order-bar">
            <div className="order-bar-inner">
              <div className="order-bar-left">
                <p className="order-address">Flintabaren, Omsjövägen, 881 70 Näsåker</p>
                <nav className="order-categories" aria-label="Kategorier">
                  <ul>
                    <li><a href="#pizza">Pizza</a></li>
                    <li><a href="#sallad">Sallad</a></li>
                    <li><a href="#rullar">Rullar</a></li>
                    <li><a href="#tallrikar">Tallrikar</a></li>
                    <li><a href="#dryck">Dryck</a></li>
                    <li><a href="#tillbehor">Tillbehör</a></li>
                  </ul>
                </nav>
              </div>
              <form className="order-search" role="search" aria-label="Sök i menyn">
                <input 
                  id="searchInput" 
                  name="q" 
                  type="search" 
                  placeholder="Sök..." 
                />
              </form>
            </div>
          </div>
          <button id="btn-top" title="Gå till toppen" aria-label="Tillbaka till toppen">⬆</button>

          {/* Sektion: Pizza */}
          <section id="pizza" className="order-section" aria-labelledby="pizza-heading">
            <h2 id="pizza-heading" className="order-section-title">Pizza</h2>
            <div className="order-items">
              <article className="order-item" data-item="margherita">
                <div className="item-info">
                  <h3 className="item-name">Margherita</h3>
                  <p className="item-desc">ost, tomat &amp; basilika</p>
                  <p className="item-price">100kr</p>
                </div>
                <figure className="item-media"><img src="/Media/pizza.png" alt="Margherita pizza" /></figure>
              </article>
              <article className="order-item" data-item="vesuvio">
                <div className="item-info">
                  <h3 className="item-name">Vesuvio</h3>
                  <p className="item-desc">ost, tomat, skinka &amp; basilika</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/pizza.png" alt="Vesuvio pizza" /></figure>
              </article>
              <article className="order-item" data-item="kebab">
                <div className="item-info">
                  <h3 className="item-name">Kebab</h3>
                  <p className="item-desc">ost, tomat, kebab &amp; basilika</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/pizza.png" alt="Kebabpizza" /></figure>
              </article>
              <article className="order-item" data-item="capricciosa">
                <div className="item-info">
                  <h3 className="item-name">Capricciosa</h3>
                  <p className="item-desc">ost, tomat, champinjoner &amp; basilika</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/pizza.png" alt="Capricciosa pizza" /></figure>
              </article>
              <article className="order-item" data-item="hawaii">
                <div className="item-info">
                  <h3 className="item-name">Hawaii</h3>
                  <p className="item-desc">ost, tomat, skinka, ananas &amp; basilika</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/pizza.png" alt="Hawaii pizza" /></figure>
              </article>
              <article className="order-item" data-item="azteca">
                <div className="item-info">
                  <h3 className="item-name">Azteca</h3>
                  <p className="item-desc">ost, tomat, tacokryddad köttfärs, lök &amp; basilika</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/pizza.png" alt="Azteca pizza" /></figure>
              </article>
            </div>
          </section>

          {/* Sektion: Sallad */}
          <section id="sallad" className="order-section" aria-labelledby="sallad-heading">
            <h2 id="sallad-heading" className="order-section-title">Sallad</h2>
            <div className="order-items">
              <article className="order-item" data-item="kycklingsallad">
                <div className="item-info">
                  <h3 className="item-name">Kycklingsallad</h3>
                  <p className="item-desc">romansallad, tomater, kyckling, parmesan &amp; caesardressing</p>
                  <p className="item-price">100kr</p>
                </div>
                <figure className="item-media"><img src="/Media/sallad.png" alt="Kycklingsallad" /></figure>
              </article>
              <article className="order-item" data-item="tonfisksallad">
                <div className="item-info">
                  <h3 className="item-name">Tonfisksallad</h3>
                  <p className="item-desc">romansallad, tomater, tonfisk &amp; ranchdressing</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/sallad.png" alt="Tonfisksallad" /></figure>
              </article>
              <article className="order-item" data-item="raksallad">
                <div className="item-info">
                  <h3 className="item-name">Räksallad</h3>
                  <p className="item-desc">romansallad, tomater, räkor, dill &amp; rhode island</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/sallad.png" alt="Räksallad" /></figure>
              </article>
              <article className="order-item" data-item="grekisk">
                <div className="item-info">
                  <h3 className="item-name">Grekisk sallad</h3>
                  <p className="item-desc">romansallad, tomater, gurka, fetaost &amp; rödlök</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/sallad.png" alt="Grekisk sallad" /></figure>
              </article>
              <article className="order-item" data-item="skinksallad">
                <div className="item-info">
                  <h3 className="item-name">Skinksallad</h3>
                  <p className="item-desc">romansallad, tomater, skinka, gouda &amp; rhode island</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/sallad.png" alt="Skinksallad" /></figure>
              </article>
            </div>
          </section>

          {/* Sektion: Rullar */}
          <section id="rullar" className="order-section" aria-labelledby="rullar-heading">
            <h2 id="rullar-heading" className="order-section-title">Rullar</h2>
            <div className="order-items">
              <article className="order-item" data-item="kebabrulle">
                <div className="item-info">
                  <h3 className="item-name">Kebabrulle</h3>
                  <p className="item-desc">kebabkött, romansallad, tomater &amp; kebabsås</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/rulle.jpeg" alt="Kebabrulle" /></figure>
              </article>
              <article className="order-item" data-item="kycklingrulle">
                <div className="item-info">
                  <h3 className="item-name">Kycklingrulle</h3>
                  <p className="item-desc">kyckling, romansallad, tomater &amp; kebabsås</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/rulle.jpeg" alt="Kycklingrulle" /></figure>
              </article>
              <article className="order-item" data-item="gyrosrulle">
                <div className="item-info">
                  <h3 className="item-name">Gyrosrulle</h3>
                  <p className="item-desc">gyroskött, romansallad, tomater &amp; kebabsås</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/rulle.jpeg" alt="Gyrosrulle" /></figure>
              </article>
            </div>
          </section>

          {/* Sektion: Tallrikar */}
          <section id="tallrikar" className="order-section" aria-labelledby="tallrikar-heading">
            <h2 id="tallrikar-heading" className="order-section-title">Tallrikar</h2>
            <div className="order-items">
              <article className="order-item" data-item="kebabtallrik">
                <div className="item-info">
                  <h3 className="item-name">Kebabtallrik</h3>
                  <p className="item-desc">Pommes frites, kebabkött, romansallad, tomater &amp; kebabsås</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/tallrik.jpeg" alt="Kebabtallrik" /></figure>
              </article>
              <article className="order-item" data-item="kycklingtallrik">
                <div className="item-info">
                  <h3 className="item-name">Kycklingtallrik</h3>
                  <p className="item-desc">Pommes frites, kyckling, romansallad, tomater &amp; kebabsås</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/tallrik.jpeg" alt="Kycklingtallrik" /></figure>
              </article>
              <article className="order-item" data-item="gyrostallrik">
                <div className="item-info">
                  <h3 className="item-name">Gyrostallrik</h3>
                  <p className="item-desc">Pommes frites, gyroskött, romansallad, tomater &amp; kebabsås</p>
                  <p className="item-price">120kr</p>
                </div>
                <figure className="item-media"><img src="/Media/tallrik.jpeg" alt="Gyrostallrik" /></figure>
              </article>
            </div>
          </section>

          {/* Sektion: Dryck */}
          <section id="dryck" className="order-section" aria-labelledby="dryck-heading">
            <h2 id="dryck-heading" className="order-section-title">Dryck</h2>
            <div className="order-items">
              <article className="order-item" data-item="cocacola">
                <div className="item-info">
                  <h3 className="item-name">Coca-Cola</h3>
                  <p className="item-desc"></p>
                  <p className="item-price">20kr</p>
                </div>
                <figure className="item-media"><img src="/Media/cocacola.jpeg" alt="Coca-Cola" /></figure>
              </article>
              <article className="order-item" data-item="fanta">
                <div className="item-info">
                  <h3 className="item-name">Fanta</h3>
                  <p className="item-desc"></p>
                  <p className="item-price">20kr</p>
                </div>
                <figure className="item-media"><img src="/Media/fanta.jpeg" alt="Fanta" /></figure>
              </article>
              <article className="order-item" data-item="trocadero">
                <div className="item-info">
                  <h3 className="item-name">Trocadero</h3>
                  <p className="item-desc"></p>
                  <p className="item-price">20kr</p>
                </div>
                <figure className="item-media"><img src="/Media/trocadero.jpeg" alt="Trocadero" /></figure>
              </article>
              <article className="order-item" data-item="mariestads">
                <div className="item-info">
                  <h3 className="item-name">Mariestads</h3>
                  <p className="item-desc">4,5% 40cl</p>
                  <p className="item-price">60kr</p>
                </div>
                <figure className="item-media"><img src="/Media/mariestads.jpeg" alt="Mariestads öl" /></figure>
              </article>
              <article className="order-item" data-item="norrlands">
                <div className="item-info">
                  <h3 className="item-name">Norrlands Guld</h3>
                  <p className="item-desc">5,3% 40cl</p>
                  <p className="item-price">60kr</p>
                </div>
                <figure className="item-media"><img src="/Media/norrlandsguld.avif" alt="Norrlands Guld öl" /></figure>
              </article>
            </div>
          </section>
          
          <section id="tillbehor" className="order-section" aria-labelledby="tillbehor-heading">
            <h2 id="tillbehor-heading" className="order-section-title">Tillbehör</h2>
            <div className="order-items">
              <article className="order-item" data-item="pommes">
                <div className="item-info">
                  <h3 className="item-name">Pommes frites</h3>
                  <p className="item-desc"></p>
                  <p className="item-price">35kr</p>
                </div>
                <figure className="item-media"><img src="/Media/fries.jpeg" alt="Pommes frites" /></figure>
              </article>
              <article className="order-item" data-item="bearnaisesas">
                <div className="item-info">
                  <h3 className="item-name">Bearnaisesås</h3>
                  <p className="item-desc"></p>
                  <p className="item-price">20kr</p>
                </div>
                <figure className="item-media"><img src="/Media/bearnaise.jpeg" alt="Bearnaisesås" /></figure>
              </article>
            </div>
          </section>
        </div>
      </main>

      {/* Cart button */}
      <CartButton />
    </div>
  );
};

export default Bestall;