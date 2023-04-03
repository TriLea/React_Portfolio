//import { Link } from 'react-router-dom';
//import '../styles/Nav.css';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import ReorderIcon from "@material-ui/icons/Reorder";

export default function Nav() {

  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
      <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
        </button>
      </div>
      <ul className='NavBar'>
        <Link to="/"> Home </Link>
        <Link to="/About"> About </Link>
        <Link to="/Contact"> Contact </Link>
        <Link to="/Portfolio"> Portfolio </Link>
        <Link to="/Resume"> Resume </Link>
      </ul>
    </div>
  );
}