import React,{useEffect, Fragment} from 'react';
import {getPosts} from '../../action/PostAction';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import { Header,Icon } from 'semantic-ui-react';
import PostItem from './PostItem';
import PostForm from './PostForm';
import CommentForm from '../post/CommentForm';


 
 const Posts = ({getPosts,post:{posts,loading}}) => {

    useEffect(() => {
        getPosts()
       
    }, []);
    return ( loading?
        <Spinner/> : (<Fragment>
            <div className='ui container'>
                <Header>Post</Header>
                <p><Icon name='user'/>Welcome to the commnunity</p>
                <PostForm/>
                <div>{posts.map(post => (
                    <PostItem key={post._id} post={post}/>
                ))}</div>
            </div> 
        </Fragment>)
    )
}
const mapStateToProps = (state) => ({
    post:state.post
})

export default connect(mapStateToProps,{getPosts})(Posts);
