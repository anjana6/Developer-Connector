import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {Header,Image, Button,Icon, CommentActions} from 'semantic-ui-react';
import {addLikes,removeLikes} from '../../action/PostAction';

const PostItem = ({post:{_id,text,name,avatar,user,likes,comment,date},auth,addLikes,removeLikes}) => {
    return (
        <div>
            <div>
                <Link to='profile.html'><Image src={avatar}/><Header>{name}</Header></Link>
            </div>
            <div>
                <p>{text}</p>
                <p>Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></p>
                <Button color='teal' onClick={(e) => addLikes(_id)}><Icon name='thumbs up'/>{likes.length>0 && (<span>{likes.length}</span>)}</Button>
                <Button color='teal' onClick={e => removeLikes(_id)}><Icon name='thumbs down'/><span>{likes.length}</span></Button>
                <Link to={`/post/${_id}`} className='ui button red'>Discussion {comment.length>0 && (<span>{CommentActions.length}</span>)} </Link>
                {!auth.loading && user === auth.user._id && (
                    <Button color='teal'><Icon name='time'/><span>{likes.length}</span></Button>
                )}

            </div>
        </div>
    ) 
}
const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps,{addLikes,removeLikes})(PostItem);
