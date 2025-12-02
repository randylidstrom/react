import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Meny from './pages/Meny';
import Oppettider from './pages/Oppettider';
import Hitta from './pages/Hitta';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meny" element={<Meny />} />
        <Route path="/oppettider" element={<Oppettider />} />
        <Route path="/hitta" element={<Hitta />} />
      </Routes>
    </div>
  );
}

export default App;