import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import {getGithubRepos} from '../../action/profileAction';
import { Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

 const ProfileGithub = ({username,getGithubRepos,repos}) => {

    useEffect(() => {
        getGithubRepos(username);
        
    }, [getGithubRepos(username)])
    return (
        <div>
            <Header>Github Repos</Header>
            {repos === null ? <Spinner/> : (
                repos.map(repo => (
                    <div>
                    <Header as='h4'>
                        <Link to={repo.html_url} target='_blank'>{repo.name}</Link>
                    </Header>
                    <p>{repo.description}</p>
                    <div>
                        <ul>
                            <li>Stars:{repo.stargazers_count}</li>
                            <li>Watchers:{repo.watchers_count}</li>
                            <li>Forks:{repo.forks_count}</li>
                        </ul>
                    </div>
                 </div>
                ))
            )}
        </div>
    )
}

const mapStateToProps = state =>({
    repos : state.profile.repos
})

export default connect(mapStateToProps,{getGithubRepos})(ProfileGithub);
