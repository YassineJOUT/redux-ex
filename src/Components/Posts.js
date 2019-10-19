import React, { Component } from 'react'

class Posts extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }
    componentWillMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res =>  res.json())
            .then(data => this.setState({posts : data}));
    }
    render(){
        const postItems = this.state.posts.map(
            elem => (<div key={elem.id}><h2>{elem.title}</h2><p>{elem.body}</p><br/></div>)
        );
        return (
            <div>
                <h1>Posts</h1>
                    {
                        postItems
                    }
                
            </div>
        );
    }
}

export default Posts;