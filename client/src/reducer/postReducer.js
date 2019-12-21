import {GET_POST,POST_ERROR,UPDATE_LIKES} from '../action/Type';

const initialState = {
    posts:[],
    post: null,
    loading:true,
    error: {}
}

export default (state=initialState,action) => {
    const {type,payload} = action;

    switch(type) {
        case GET_POST:
            return {
                ...state,posts:payload,loading:false
            };
        case POST_ERROR:
            return {
                ...state,error:payload,loading:false
            };
        case UPDATE_LIKES:
            return{
                ...state,posts:state.posts.map(post => post._id === payload.postId? {...post,likes:payload.likes} : post),
                loading:false
            }
            default:
                return state;
    }
}