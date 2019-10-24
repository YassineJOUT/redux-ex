const API_HOST = 'https://jsonplaceholder.typicode.com/posts';


export const getPosts = (action,dispatch) => {

    fetch(API_HOST)
            .then(res =>  res.json())
            .then(posts => dispatch({
                    type: action,
                    payload : posts
                    })
                
            )
}

export const addPost = (action,dispatch,postA) => {
    fetch(API_HOST, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        data: JSON.stringify(postA)
    }).then(res => res.json())
    .then(post => dispatch({
        type: action,
        payload : { ...post, ...postA}
        }        
        )
        )
}
