import React from 'react';
import Logo from './Assets/Logo.svg';
import './NavBar.css'


export default function NavBar() {
  return (
    
    <header>
      <div className='logo_container'>
        <img src={Logo} className='nav_logo'></img>
        <h2 className='nav_name'>FLUORESCENT</h2>
      </div>
      <nav>
        <ul>
            <li><a id="nav-link" class="link-item nav-link outer-shadow hover-in-shadow" href="#how_to_use">How to use</a></li>
            <li><a id="nav-link" class="link-item nav-link outer-shadow hover-in-shadow" href="#Login">Login</a></li>
            <li><a id="nav-link" class="link-item nav-link outer-shadow hover-in-shadow" href="#Get Started">Get Started</a></li>
        </ul>
      </nav>
      <div className='nav_line'></div>
    </header>
    
  )
}
