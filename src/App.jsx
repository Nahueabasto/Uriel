import { HashRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import './App.css';
import { AuthProvider } from './Context/AuthContext';


function App() {
  return (
    <AuthProvider>
    <HashRouter>
      <div className="flex">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </HashRouter>
   </AuthProvider>
  );
}

export default App;
