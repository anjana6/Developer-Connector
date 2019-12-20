import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';


 const Landing = ({isAuthonticated}) => {
     if(isAuthonticated){
         return <Redirect to='/dashboard'/>;
     }
    return (
        <div className="landing"> 
            <div className="dark-overlay">
            <div className="ui container con">
                <div>
                <h1 className="ui yellow header">Developer Connector</h1>

                <p className="header-para">Create a developer profile/portfolio, share posts and get help from other developers</p>
                <div>
                    <Link to='/register' className="ui primary button">Sing Up</Link>
                    <Link to='/login' className="ui lignt button">Login</Link>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuthonticated : state.auth.isAuthenticated 
})
export default connect(mapStateToProps)(Landing);