import Header from '../components/Header';

const Meny = () => {
  return (
    <div className="menu-page">
      <Header />
      
      <main className="menu-wrapper" aria-labelledby="meny-title">
        <div className="menu-card">
          <h1 id="meny-title" className="menu-title">MENY</h1>
          
          <nav className="menu-categories" aria-label="Kategorier">
            <ul>
              <li><a href="#pizzor">pizzor</a></li>
              <li><a href="#sallader">sallader</a></li>
              <li><a href="#rullar">rullar</a></li>
              <li><a href="#tallrikar">tallrikar</a></li>
              <li><a href="#dryck">dryck</a></li>
            </ul>
          </nav>
          
          <button id="btn-top" title="Gå till toppen" aria-label="Tillbaka till toppen">⬆</button>

          {/* Sektion: Pizzor */}
          <section id="pizzor" className="menu-section" aria-labelledby="pizzor-heading">
            <h2 id="pizzor-heading" className="menu-section-title">pizza</h2>
            <ul className="menu-items" aria-label="Pizzor">
              <li className="menu-item">
                <h3 className="item-name">margherita</h3>
                <p className="item-desc">ost, tomat &amp; basilika</p>
                <p className="item-price">100kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">vesuvio</h3>
                <p className="item-desc">ost, tomat, skinka &amp; basilika</p>
                <p className="item-price">120kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">kebabpizza</h3>
                <p className="item-desc">ost, tomat, kebabkött &amp; basilika</p>
                <p className="item-price">120kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">capricciosa</h3>
                <p className="item-desc">ost, tomat, champinjoner &amp; basilika</p>
                <p className="item-price">120kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">hawaii</h3>
                <p className="item-desc">ost, tomat, skinka, ananas &amp; basilika</p>
                <p className="item-price">120kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">azteca</h3>
                <p className="item-desc">ost, tomat, tacokryddad köttfärs, lök &amp; basilika</p>
                <p className="item-price">120kr</p>
              </li>
            </ul>
            <div className="menu-separator" aria-hidden="true"></div>
          </section>

          {/* Sektion: Sallader */}
          <section id="sallader" className="menu-section" aria-labelledby="sallader-heading">
            <h2 id="sallader-heading" className="menu-section-title">sallad</h2>
            <ul className="menu-items" aria-label="Sallader">
              <li className="menu-item">
                <h3 className="item-name">kycklingsallad</h3>
                <p className="item-desc">romansallad, tomater, kyckling, parmesan &amp; caesardressing</p>
                <p className="item-price">100kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">tonfisksallad</h3>
                <p className="item-desc">romansallad, tomater, tonfisk &amp; ranchdressing</p>
                <p className="item-price">120kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">räksallad</h3>
                <p className="item-desc">romansallad, tomater, räkor, dill &amp; rhode island</p>
                <p className="item-price">120kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">grekisk sallad</h3>
                <p className="item-desc">romansallad, tomater, gurka, fetaost &amp; rödlök</p>
                <p className="item-price">120kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">skinksallad</h3>
                <p className="item-desc">romansallad, tomater, skinka, gouda &amp; rhode island</p>
                <p className="item-price">120kr</p>
              </li>
            </ul>
            <div className="menu-separator" aria-hidden="true"></div>
          </section>

          {/* Sektion: Rullar */}
          <section id="rullar" className="menu-section" aria-labelledby="rullar-heading">
            <h2 id="rullar-heading" className="menu-section-title">rullar</h2>
            <ul className="menu-items" aria-label="Rullar">
              <li className="menu-item">
                <h3 className="item-name">Kebabrulle</h3>
                <p className="item-desc">kebabkött, romansallad, tomater &amp; kebabsås</p>
                <p className="item-price">120kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">Kycklingrulle</h3>
                <p className="item-desc">kyckling, romansallad, tomater &amp; kebabsås</p>
                <p className="item-price">120kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">Gyrosrulle</h3>
                <p className="item-desc">gyroskött, romansallad, tomater &amp; kebabsås</p>
                <p className="item-price">120kr</p>
              </li>
            </ul>
            <div className="menu-separator" aria-hidden="true"></div>
          </section>

          {/* Sektion: Tallrikar */}
          <section id="tallrikar" className="menu-section" aria-labelledby="tallrikar-heading">
            <h2 id="tallrikar-heading" className="menu-section-title">tallrikar</h2>
            <ul className="menu-items" aria-label="Tallrikar">
              <li className="menu-item">
                <h3 className="item-name">Kebabtallrik</h3>
                <p className="item-desc">Pommes frites, kebabkött, romansallad, tomater &amp; kebabsås</p>
                <p className="item-price">120kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">Kycklingtallrik</h3>
                <p className="item-desc">Pommes frites, kyckling, romansallad, tomater &amp; kebabsås</p>
                <p className="item-price">120kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">Gyrostallrik</h3>
                <p className="item-desc">Pommes frites, gyroskött, romansallad, tomater &amp; kebabsås</p>
                <p className="item-price">120kr</p>
              </li>
            </ul>
            <div className="menu-separator" aria-hidden="true"></div>
          </section>

          {/* Sektion: Dryck */}
          <section id="dryck" className="menu-section" aria-labelledby="dryck-heading">
            <h2 id="dryck-heading" className="menu-section-title">dryck</h2>
            <ul className="menu-items" aria-label="Dryck">
              <li className="menu-item">
                <h3 className="item-name">Coca-Cola</h3>
                <p className="item-desc"></p>
                <p className="item-price">20kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">Fanta</h3>
                <p className="item-desc"></p>
                <p className="item-price">20kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">Trocadero</h3>
                <p className="item-desc"></p>
                <p className="item-price">20kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">Mariestads</h3>
                <p className="item-desc">4,5% 40cl</p>
                <p className="item-price">60kr</p>
              </li>
              <li className="menu-item">
                <h3 className="item-name">Norrlands Guld</h3>
                <p className="item-desc">5,3% 40cl</p>
                <p className="item-price">60kr</p>
              </li>
            </ul>
            <div className="menu-separator" aria-hidden="true"></div>
          </section>
          
        </div>
      </main>

      {/* Cart button */}
      <a href="/bestall" className="cart-fab" aria-label="Beställ online" title="Beställ online">
        <img src="/Media/shopping-cart.svg" alt="" aria-hidden="true" />
      </a>
    </div>
  );
};

export default Meny;