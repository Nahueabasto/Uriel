import { HashRouter, Routes, Route } from 'react-router-dom'; 
import { AuthProvider } from './Context/AuthContext';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import About from './pages/About';
import Deco from './pages/Deco';
import Navidad from './pages/Navidad';
import './App.css';



function App() {
  return (
    <AuthProvider>
    <HashRouter>
      <div className="flex">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/deco" element={<Deco />} />
          <Route exact path="/navidad" element={<Navidad />} />
          <Route exact path="/deco/:id" element={<Deco />} /> 
        </Routes>
      </div>
    </HashRouter>
   </AuthProvider>
  );
}

export default App;
