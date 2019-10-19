import React, { Component } from 'react'

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : "" ,
            body : ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const Post = {
            title: this.state.title,
            body: this.state.body 
        }
        console.log(Post);
        fetch("https://jsonplaceholder.typicode.com/posts", {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                data: JSON.stringify(Post)
            }).then(res => res.json())
            .then(data => console.log(data));
        }
    render(){
        
        return (
            <div>
                <h1>Add Post</h1>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label> Title:  </label><br />
                            <input type="text" name="title" onChange={this.onChange}  value={this.state.title}/>
                        </div>
                        <div>
                            <label> Body: </label><br />
                            <input type="text" name="body" onChange={this.onChange}  value={this.state.body}/>
                        </div>
                        <div>
                            
                            <input type="submit" value="submit" />
                        </div>
                    </form>
                
            </div>
        );
    }
}

export default PostForm;