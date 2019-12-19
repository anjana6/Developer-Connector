import React,{ useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import {getCurrentProfile} from '../../action/profileAction';
import Spinner from '../layout/Spinner';
import { Header,Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import ActionDashboard from './ActionDashboard';
import Experience from './Experience';
import Education from './Education'

const Dashboard = ({getCurrentProfile,profile :{profile,loading},auth:{user}}) => {
    useEffect(() => {
        getCurrentProfile()
    }, []);
    console.log(profile);
    return loading && profile === null? (<Spinner/>) : 
    (<Fragment>
        <div className="ui container">
        <Header as='h1' color='violet'>Dashboard</Header>
        <p><i className="fa fa-user"></i>Welcome{ user && user.name }</p>
        {profile !== null?
            (<Fragment>
                <ActionDashboard/>
                <Experience experience={profile.experience}/>
                <Education education={profile.education}/>
            </Fragment>):
            (<Fragment>
                <p>You have not yet setup a profile, please add some info</p>
                <Link to='/create-profile'><Button primary>Create Frofile</Button></Link>
            </Fragment>)}
        </div>>
    </Fragment>);
}
 
const mapStateToProps = (state) =>({
    auth:state.auth,
    profile: state.profile
})

export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);
