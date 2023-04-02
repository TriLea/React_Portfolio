import logo from './logo.svg';
import './App.css';
//using react-router-dom to display different components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<Nav />} />
          <Route path="/users" element={<Projects />} />
          <Route path="*" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
