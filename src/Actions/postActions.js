import {FETCH_POSTS,NEW_POST} from '../Actions/types'
import {getPosts,addPost} from '../Helpers/apiHelper'

export const fetchPosts = () => dispatch => {
    getPosts(FETCH_POSTS,dispatch);
}



export const createPost = postA => dispatch => {
    addPost(NEW_POST,dispatch,postA);

}

