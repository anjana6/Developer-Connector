import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {Header,Image, Button,Icon, CommentActions} from 'semantic-ui-react';
import {addLikes,removeLikes,deletePost} from '../../action/PostAction';

const PostItem = ({post:{_id,text,name,avatar,user,likes,comment,date},auth,addLikes,removeLikes,deletePost,showActions}) => {
    return (
        <div>
            <div> 
                <Link to='profile.html'><Image src={avatar}/><Header>{name}</Header></Link>
            </div>
            <div>
                <p>{text}</p>
                <p>Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></p>

                {showActions && 
                <Fragment>
                    <Button color='teal' onClick={(e) => addLikes(_id)}><Icon name='thumbs up'/>{likes.length>0 && (<span>{likes.length}</span>)}</Button>
                    <Button color='teal' onClick={e => removeLikes(_id)}><Icon name='thumbs down'/><span>{likes.length}</span></Button>
                    <Link to={`/posts/${_id}`} className='ui button blue'>Discussion {comment.length>0 && (<span>{Comment.length}</span>)} </Link>
                    {!auth.loading && user === auth.user._id && (
                        <Button color='teal' onClick={e => deletePost(_id)}><Icon name='times'/></Button>
                    )}
                </Fragment>}
                

            </div>
        </div>
    ) 
}

PostItem.defaultProps = {
    showActions:true
};
const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps,{addLikes,removeLikes,deletePost})(PostItem);
