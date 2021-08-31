import React from 'react'
import {Link}  from 'react-router-dom';


const NavBar = ()=>{
   return ( <nav>
    <div class="nav-wrapper white">
      <Link to="/" class="brand-logo">Instagram</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">Sign-up</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  </nav>)
        
}
export default NavBar;