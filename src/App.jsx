import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bio from './pages/Bio';
import CV from './pages/CV';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
