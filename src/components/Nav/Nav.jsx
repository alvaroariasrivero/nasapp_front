import React from "react";
import {Link} from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return <>
  <nav className="burger">
      <input type="checkbox" name="menu" id="menu"/>
      <label htmlFor="menu" className="burger_lines">☰</label>
      <ul className="dropdown">
        <li className="option"><Link to='/'>Home</Link></li>
        <li className="option"><Link to='/landings'>Landings</Link></li>
        <li className="option"><Link to='/neas'>Neas</Link></li>
      </ul>
    </nav>
  <h1>NasApp</h1>
    <div className="navbar">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/landings'>Landings</Link></li>
          <li><Link to='/neas'>Neas</Link></li>
        </ul>
      </nav>
    </div>
  </>;
};

export default Nav;
