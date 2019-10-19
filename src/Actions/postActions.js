import {FETCH_POSTS,NEW_POST} from '../Actions/types'

export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res =>  res.json())
            .then(posts => dispatch({
                    type: FETCH_POSTS,
                    payload : posts
                    })
                
            )
}



export const createPost = postA => dispatch => {
    console.log(postA);
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        data: JSON.stringify(postA)
    }).then(res => res.json())
    .then(post => {
        console.log(post);
        return dispatch({
        type: NEW_POST,
        payload : { ...post, ...postA}
        }        
        )}
        )

}

