import {GET_POST,POST_ERROR, PROFILE_ERROR, UPDATE_LIKES} from './Type';
import {setAlert}  from './alertAction';
import axios from 'axios';

export const getPosts = () =>async dispatch =>{
    
    try {
        const res = await axios.get('/api/post');

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