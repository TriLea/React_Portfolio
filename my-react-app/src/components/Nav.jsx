import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className=''>
      <div className='toggleBtn'>
        <button></button>
      </div>
      <ul className='NavBar'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Resume">Resume</Link>
      </ul>;
    </nav>
  );
}