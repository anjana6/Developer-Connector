import React from 'react';
import {Link} from 'react-router-dom';

 const Landing = () => {
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

export default Landing;