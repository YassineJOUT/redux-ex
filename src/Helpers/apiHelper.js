import axios from 'axios'

const API_HOST = 'https://jsonplaceholder.typicode.com/posts';


export const getPosts = (action,dispatch) => {

    axios.get(API_HOST).then(
        res => dispatch({
            type: action,
            payload : res.data
            })
    );
}

export const addPost = (action,dispatch,postA) => {
    axios.post(API_HOST,{postA}).then(
        res => dispatch({
            type: action,
            payload : { ...res.data, ...postA}
            })
    );
}
