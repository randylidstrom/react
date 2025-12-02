import Header from '../components/Header';

const OmOss = () => {
  return (
    <div className="about-page">
      <Header />

      <main>
        <div className="container about-wrapper">
          <article className="about-card">
            <header className="about-header">
              <h1 className="about-title">Om oss</h1>
              <img className="about-icon" src="/Media/moosecarving.png" alt="" aria-hidden="true" />
            </header>

            <div className="about-body">
              <div className="about-text">
                <p>
                  Flintabaren ligger hjärtat av Näsåker, mitt i Ångermanland, och är mer än bara en pizzeria — det är en plats där lokal tradition, natur och gemenskap möts. Här handlar det inte bara om att servera mat, utan om att föra samman människor: ortsbor som vanliga besökare, familjer, vandrare och kulturintresserade som rest till området för att uppleva det unika.
                </p>
                <p>
                  Genom åren har Näsåker vuxit fram som en plats rik på kulturarv och natursköna upplevelser. Intill byn rinner Ångermanälven, och inte långt därifrån ligger Nämforsens hällristningar, ett av Sveriges mest omfattande hällristningsområden med omkring 2 600 figur- och linjärbildrika ristningar, varav vissa är över 6 000 år gamla. 
                </p>
                <p>
                  Dessa ristningar och de forntida boplatserna runt omkring vittnar om människors liv och arbete i området från stenålder till bronsålder. Flintabaren inspireras av denna historiska bakgrund — inte genom att försöka återskapa det förflutna, utan genom att bära med sig känslan av plats, av eld, sten och jord.
                </p>
                <p>
                  Restaurangens historia är ännu ganska samtida, men präglas av viljan att vara en naturlig mötesplats för Näsåkers invånare. Namnet "Flintabaren" anspelar symboliskt på flinta — hård, gammal sten som slipats av naturkrafter, precis som platsen och människorna här har formats under generationer. Restaurangen har vidgat utbudet med tiden; från menyer där fokus låg på enkla pizzor och lokal snabbmat, till att också inkludera varma rätter, kaffe, avhämtning och servering på plats, samt att ta hänsyn till familjer, barn och grupper. Den är inte bara en plats för mat, utan också för gemenskap och vila efter dagsutflykter, fiske, vandringar eller besök vid Hällristningsmuseet.    
                </p>
                <p>
                  Vår ambition är att Flintabaren ska vara både modern och rotad: modern i bemärkelsen att service, meny och design möter dagens krav — enkelhet, tillgänglighet och kvalitet — men också rotad genom att färgerna, materialen och känslan är hämtad från Näsåker och dess omgivning. Vi vill att när du kliver in eller klickar in på vår webbplats så ska du känna doften av vedeldade ugnar, hör ekot av älvens forsar, se nattens stjärnor över Niporna, och uppleva den värme och generositet som finns i bygden.
                </p>
              </div>

              <aside className="about-carvings" aria-label="Hällristningar, dekorativt">
                <img src="/Media/boatcarving.png" alt="" aria-hidden="true" />
                <img src="/Media/guywithlongarm.png" alt="" aria-hidden="true" />
                <img src="/Media/normaldudecarving.png" alt="" aria-hidden="true" />
              </aside>
            </div>
          </article>
        </div>
      </main>

      {/* Cart button */}
      <a href="/bestall" className="cart-fab" aria-label="Beställ online" title="Beställ online">
        <img src="/Media/shopping-cart.svg" alt="" aria-hidden="true" />
      </a>
    </div>
  );
};

export default OmOss;