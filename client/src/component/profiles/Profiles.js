import React,{useEffect, Fragment} from 'react';
import Spinner from '../layout/Spinner';
import {getProfiles} from '../../action/profileAction';
import {connect} from 'react-redux';
import { Header,Icon } from 'semantic-ui-react';
import ProfileItem from '../profiles/ProfileItem';


const Profiles = ({getProfiles,profile:{profiles,loading}}) => {

    useEffect(() => {
        getProfiles();
    }, [getProfiles]);
    return (
        <Fragment>
            <div className="ui container">
            {loading ? <Spinner/> : 
                <Fragment>
                    <Header as='h1'> Developers</Header>
                    <p><Icon name='connectdevelop' />Browse and connect with developers</p>
                    <div>
                        {profiles.length > 0 ? (
                            // <div>haiii</div>
                            profiles.map(profile =>
                            (<ProfileItem  key={profile._id} profile={profile}/>))
                        ) : <Header as='h1'>No profile found....</Header> }
                    </div>
                </Fragment>}
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps,{getProfiles})(Profiles);
