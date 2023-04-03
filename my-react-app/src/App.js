import './App.css';
//using react-router-dom to display different components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
//pages
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import AboutMe from './Pages/AboutMe';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav /> 
          <Routes>
            <Route exact path="/" element={<AboutMe />} />
            <Route exact path="/Nav" element={<Nav />} />
            <Route exact path="/Portfolio" element={<Portfolio />} />
            <Route exact path="/Resume" element={<Resume />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}
