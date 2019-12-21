import React,{useState} from 'react'
import {addComment} from '../../action/PostAction';
import {connect} from 'react-redux';
import {Header,Form,Button} from 'semantic-ui-react';

const CommentForm = ({postId,addComment}) => {
    const [text,setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addComment(postId,{text});
        setText('');
    }
    return (
        <div>
            <div>
                <Header as='h3'> Leave a comment</Header>
            </div>
            <Form onSubmit={onSubmit}>
                <Form.TextArea  placeholder='Create a Post' name='text' value={text} onChange={e => {setText(e.target.value)}} />
                <Button type='submit' className='ui button teal'>Submit</Button>
            </Form>
            
        </div>
    )
}

export default connect(null,{addComment})(CommentForm);
