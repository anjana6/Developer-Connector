import React,{useState} from 'react'
import { connect } from 'react-redux';
import {addPost} from '../../action/PostAction';
import { Header,Form,Button } from 'semantic-ui-react';


const PostForm = ({addPost}) => {
    const [text,setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(text);
        addPost({text});
        setText('')
    }
    return (
        <div>
            <div>
                <Header as='h3'> Say Something...</Header>
            </div>
            <Form onSubmit={onSubmit}>
                <Form.TextArea  placeholder='Create a Post' name='text' value={text} onChange={e => {setText(e.target.value)}} />
                <Button type='submit' className='ui button teal'>Submit</Button>
            </Form>
            
        </div>
    )
}

export default connect(null,{addPost})(PostForm);
