import React from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment';
import {removeComment} from '../../action/PostAction';
import { Button,Header,Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

 const CommentItem = ({postId,comment:{_id,text,name,avatar,user,date},auth,removeComment}) => {
    return (
        <div>
            <Link to={`/profile/${user}`}>
                <img src={avatar}/>
                <Header>{name}</Header>
                </Link>
                <p>{text}</p>
                <p>Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></p>
                {/* {!auth.loading && user === auth.user._id && (
                    <Button onClick={(e) => removeComment(postId,_id)}><Icon name='times'/></Button>
                )} */}
        </div>
    )
}

const mapStateToProps = (state) =>({
    auth:state.auth
})

export default connect(mapStateToProps,{removeComment})(CommentItem) 