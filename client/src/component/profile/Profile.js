import React,{useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileById} from '../../action/profileAction';
import Spinner from '../layout/Spinner';
import {Button} from 'semantic-ui-react';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';


const Profile = ({getProfileById,profile:{profile,loading},match,auth}) => {
    useEffect(() => {
       getProfileById(match.params.id);
    }, []);
    
    return <Fragment>
        <div className="ui container">
        {profile === null || loading ? <Spinner/> : 
            <Fragment>
                <Link to='/profiles'> <Button inverted color='teal'>Back To Profile</Button></Link>
                {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (<Link to='/edit-profile' className='ui teal button'>Edit Profile</Link>)}

                <div className="ui container">
                    <ProfileTop profile={profile}/>
                    <ProfileAbout profile={profile}/>
                </div>
            </Fragment>}
            </div>
    </Fragment>
};

const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth
})

export default connect(mapStateToProps,{getProfileById})(Profile);
