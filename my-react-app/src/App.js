import './App.css';
//using react-router-dom to display different components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />  
        <Routes>
          <Route path="/Header" element={<Header />} />
          <Route path="/Nav" element={<Nav />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experience" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
