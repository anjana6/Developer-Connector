import React from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment';
import {removeComment} from '../../action/PostAction';
import { Button,Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

 const CommentItem = ({postId,comment:{_id,text,name,avatar,user,date},auth,deleteComment}) => {
    return (
        <div>
            <Link to={`/profile/${user}`}>
                <img src={avatar}/>
                <Header>{name}</Header>
                </Link>
                <p>{text}</p>
                <p>Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></p>/>
                {!auth.loading && user === auth.user._id && (
                    <Button></Button>
                )}
        </div>
    )
}

const mapStateToProps = () =>{

}

export default connect(mapStateToProps,{removeComment})(CommentItem) 