import {GET_POSTS,POST_ERROR, UPDATE_LIKES,DELETE_POST,ADD_POST,GET_POST,ADD_COMMENT,REMOVE_COMMENT} from './Type';
import {setAlert}  from './alertAction';
import axios from 'axios';

export const getPosts = () =>async dispatch =>{
    
    try {
        const res = await axios.get('/api/post');

        dispatch({
            type:GET_POSTS, 
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        });
        
    }

}

export const addLikes = (postId) =>async dispatch =>{
    
    try {
        const res = await axios.put(`/api/post/like/${postId}`);

        dispatch({
            type:UPDATE_LIKES,
            payload:{postId,likes:res.data}
        });
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        });
        
    }

}

export const removeLikes = (postId) =>async dispatch =>{
    
    try {
        const res = await axios.put(`/api/post/unlike/${postId}`);

        dispatch({
            type:UPDATE_LIKES,
            payload:{postId,likes:res.data}
        });
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        });
        
    }

}

export const deletePost = (postId) =>async dispatch =>{
    
    try {
         await axios.delete(`/api/post/${postId}`);

        dispatch({
            type:DELETE_POST,
            payload:postId
        });

        dispatch(setAlert( 'Post Removed', 'success'));
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        });
        
    }

} 

export const addPost = (text) =>async dispatch =>{
    console.log(text);

    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    
    try {
        const res = await axios.post('/api/post',text,config);

        dispatch({
            type:ADD_POST,
            payload:res.data
        });

        dispatch(setAlert( 'Post Created', 'success'));
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        });
        
    }

}

export const getPost = (id) =>async dispatch =>{
    
    try {
        const res = await axios.get(`/api/post/${id}`);
        // console.log(res.data);

        dispatch({
            type:GET_POST,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        });
        
    }

}

export const addComment = (postId,formData) =>async dispatch =>{
    

    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    
    try {
        const res = await axios.post(`/api/post/comment/${postId}`,formData,config);

        dispatch({
            type:ADD_COMMENT,
            payload:res.data
        });

        dispatch(setAlert( 'Comment Added', 'success'));
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        });
        
    }

}

export const removeComment = (postId,commentId) =>async dispatch =>{

    try {
         await axios.delete(`/api/post/comment/${postId}/${commentId}`);

        dispatch({
            type:REMOVE_COMMENT,
            payload:commentId
        });

        dispatch(setAlert( 'Comment Removed', 'success'));
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        });
        
    }

}
