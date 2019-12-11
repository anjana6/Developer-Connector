import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar ui menu secondary">
    <Link to='/' className="item"><i className="fa fa-code"></i>Devconnecter</Link>  
    <div className="right menu">
        <div className="item">
        <Link to="/" className="active item">Devloper</Link>
        <Link to="/register" className="item">Register</Link>
        <Link to="/login" className="item">Login</Link>
        </div>
       
    </div>
  </div>
  );
};

export default Navbar;
