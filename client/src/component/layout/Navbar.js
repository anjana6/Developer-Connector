import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import {logout} from '../../action/authAction';
import {connect} from 'react-redux';


const Navbar = ({logout,auths}) => {

  const authLink = (
    <Fragment>
      <Link to="/profiles" className="active item">Devlopers</Link>
      <Link to="/posts" className="item">Posts</Link>
      <Link to="/dashboard" className="item"><i className="fa fa-user"/>Dashboard</Link>
      <Link onClick={logout} to="#" className="active item"><i className ="fas fa-sign-out-alt"></i>Logout</Link>
    </Fragment>
  );

  const gestLink = (
    <Fragment>
      
      <Link to="/profiles" className="active item">Devlopers</Link>
      <Link to="/register" className="item">Register</Link>
      <Link to="/login" className="item">Login</Link>
    </Fragment>
    
);
  return (
    <div className="navbar ui menu secondary">
    <Link to='/' className="item">Devconnecter</Link>  
    <div className="right menu">
        <div className="item">
          {!auths.loading && (<Fragment>{auths.isAuthenticated? authLink : gestLink}</Fragment>)}
        </div>
       
    </div>
  </div>
  );
};

const mapsToPros = (state) =>({
 auths: state.auth
});

export default connect(mapsToPros,{logout})(Navbar);
