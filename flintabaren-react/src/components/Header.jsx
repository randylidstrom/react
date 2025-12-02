import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="Startsida">FLINTABAREN</Link>
        
        <div id="nav-toggle" className="hamburger" role="button" aria-label="Öppna meny" tabIndex="0">
            <span></span><span></span><span></span>
        </div>
        
        <nav id="site-nav" className="main-nav" aria-label="Huvudmeny">
            <ul>
                <li><Link to="/meny">meny</Link></li>
                <li><Link to="/oppettider">öppettider</Link></li>
                <li><Link to="/hitta">hitta hit</Link></li>
                <li><Link to="/om-oss">om oss</Link></li>
            </ul>
        </nav>
        <Link to="/bestall" className="btn btn-primary">beställ online</Link>
      </div>
    </header>
  );
};

export default Header;