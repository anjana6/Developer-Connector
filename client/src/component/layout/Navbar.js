import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import {logout} from '../../action/authAction';
import {connect} from 'react-redux';
import authReducer from "../../reducer/authReducer";


const Navbar = ({logout,auths}) => {

  const authLink = (
    <Fragment>
      <Link onClick={logout} to="#" className="active item"><i className ="fas fa-sign-out-alt"></i>Logout</Link>
    </Fragment>
  );

  const gestLink = (
    <Fragment>
      <Link to="/" className="active item">Devloper</Link>
      <Link to="/register" className="item">Register</Link>
      <Link to="/login" className="item">Login</Link>
    </Fragment>
    
);
  return (
    <div className="navbar ui menu secondary">
    <Link to='/' className="item"><i className="fa fa-code"></i>Devconnecter</Link>  
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
