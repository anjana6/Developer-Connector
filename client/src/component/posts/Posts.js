import React,{useEffect, Fragment} from 'react';
import {getPosts} from '../../action/PostAction';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import { Header,Icon } from 'semantic-ui-react';
import PostItem from './PostItem';

 
 const Posts = ({getPosts,post:{posts,loading}}) => {

    useEffect(() => {
        getPosts();
       
    }, []);
    return ( loading?
        <Spinner/> : (<Fragment>
            <Header>Post</Header>
            <p><Icon name='user'/>Welcome to the commnunity</p>
        <div>{posts.map(post => (
            <PostItem key={post._id} post={post}/>
        ))}</div>
        </Fragment>)
    )
}
const mapStateToProps = (state) => ({
    post:state.post
})

export default connect(mapStateToProps,{getPosts})(Posts);
