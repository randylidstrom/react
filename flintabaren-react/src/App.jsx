import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Meny from './pages/Meny';
import Oppettider from './pages/Oppettider';
import Hitta from './pages/Hitta';
import OmOss from './pages/Om-oss';
import Bestall from './pages/Bestall';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meny" element={<Meny />} />
        <Route path="/oppettider" element={<Oppettider />} />
        <Route path="/hitta" element={<Hitta />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/bestall" element={<Bestall />} />
      </Routes>
    </div>
  );
}

export default App;