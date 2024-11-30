import { HashRouter, Routes, Route } from 'react-router-dom'; 
import { AuthProvider } from './Context/AuthContext';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import About from './pages/About';
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
        </Routes>
      </div>
    </HashRouter>
   </AuthProvider>
  );
}

export default App;
