import React,{Fragment,useEffect} from 'react';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getPost} from '../../action/PostAction';
import PostItem from  '../posts/PostItem';
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';


 const Post = ({getPost,post: {post,loading},match}) => {
     useEffect(() => {
        getPost(match.params.id);
     }, [getPost])
    return loading || post === null ? <Spinner/> : 
    <Fragment>
        <div className='ui container'>
        <Link to='/posts' className='ui button teal'>Back To Posts</Link>
        <PostItem post = {post} showActions = {false}/>
        <CommentForm postId =  {post._id}/>
        { post.comment.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={post._id}/>
        ))}
        </div>

    </Fragment>
}
const mapStateToProps = (state) => ({
    post:state.post
})

export default connect(mapStateToProps,{getPost})(Post);
