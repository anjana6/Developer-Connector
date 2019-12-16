import React from 'react'

import { connect } from 'react-redux';
import { Redirect,Route } from 'react-router-dom';


const PrivetRouter = ({component: Component,auths:{isAuthenticated,loading},...rest}) => (
    <Route {...rest} render={
        props =>!isAuthenticated && !loading ? (<Redirect to='/login'/>): (<Component {...props}/>)}
     
/>
);

const mapStateToProps = (state) =>({
    auths: state.auth
});

export default connect(mapStateToProps)(PrivetRouter);
