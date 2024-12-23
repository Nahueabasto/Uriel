import { HashRouter, Routes, Route } from 'react-router-dom'; 
import { AuthProvider } from './Context/AuthContext';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import About from './pages/About';
import Deco from './pages/Deco';
import PageDetalle from './pages/PageDetalle';
import Navidad from './pages/Navidad';
import './App.css';
import { SearchProvider } from './Context/SearchProvider';


function App() {
  return (
    <AuthProvider>
      <SearchProvider>
    <HashRouter>
      <div className="flex">
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/deco" element={<Deco />} />
          <Route exact path="/navidad" element={<Navidad />} />
          <Route exact path="/:categoria/:id" element={<PageDetalle />} />
        </Routes>
      </div>
    </HashRouter>
    </SearchProvider>
   </AuthProvider>
  );
}

export default App;
