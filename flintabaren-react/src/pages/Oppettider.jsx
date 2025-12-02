import Header from '../components/Header';
import CartButton from '../components/CartButton';
import { useEffect, useState } from 'react';

const Oppettider = () => {
  const [statusText, setStatusText] = useState("");
  const [statusClass, setStatusClass] = useState("open-status");

  // useEffect körs när sidan laddas
  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    let isOpen = false;

    if (day >= 1 && day <= 3) { // Mån - Ons
        if (hour >= 11 && hour < 21) isOpen = true;
    } 
    else if (day === 4) { // Torsdag
        if (hour >= 11 && hour < 22) isOpen = true;
    } 
    else if (day === 5) { // Fredag
        if (hour >= 11 && hour < 23) isOpen = true;
    } 
    else if (day === 6) { // Lördag
        if (hour >= 12 && hour < 23) isOpen = true;
    } 
    else if (day === 0) { // Söndag
        if (hour >= 12 && hour < 20) isOpen = true;
    }

    // Uppdatera state baserat på öppettider
    if (isOpen) {
        setStatusText("Just nu: ÖPPET");
        setStatusClass("open-status status-open");
    } else {
        setStatusText("Just nu: STÄNGT");
        setStatusClass("open-status status-closed");
    }
  }, []); // Tom array betyder att det bara körs en gång

  return (
    <div className="hours-page">
      <Header />

      <main className="hours-wrapper" aria-labelledby="hours-title">
        <div className="hours-card">
          <h1 id="hours-title" className="hours-title">ÖPPETTIDER</h1>
          
          {/* Öppet-status indikator*/}
          <div id="open-status" className={statusClass}>{statusText}</div>
          
          <p className="hours-intro">Aktuella tider kan variera vid helgdagar. Kolla våra sociala medier för avvikelser.</p>
          
          <table className="hours-table" aria-describedby="hours-note">
            <tbody>
              <tr><th scope="row">Måndag</th><td>11:00 – 21:00</td></tr>
              <tr><th scope="row">Tisdag</th><td>11:00 – 21:00</td></tr>
              <tr><th scope="row">Onsdag</th><td>11:00 – 21:00</td></tr>
              <tr><th scope="row">Torsdag</th><td>11:00 – 22:00</td></tr>
              <tr><th scope="row">Fredag</th><td>11:00 – 23:00</td></tr>
              <tr><th scope="row">Lördag</th><td>12:00 – 23:00</td></tr>
              <tr><th scope="row">Söndag</th><td>12:00 – 20:00</td></tr>
            </tbody>
          </table>
          
          <div className="hours-cta">
            <a className="btn btn-call" href="tel:+4662210607" aria-label="Ring oss på 0620 - 106 07">0620 - 106 07</a>
          </div>
          
          <p id="hours-note" className="hours-note">Ring till oss om frågor om avvikande tider!</p>
        </div>
      </main>

      {/* Cart button */}
      <CartButton />
    </div>
  );
};

export default Oppettider;