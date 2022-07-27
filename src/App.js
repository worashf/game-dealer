import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './page/Home';
import Detil from './page/Detail';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detil />} />
      </Routes>
    </Router>
  );
}

export default App;
