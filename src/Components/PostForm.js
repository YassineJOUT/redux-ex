import React, { Component } from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../Actions/postActions'

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : '' ,
            body : ''
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
            this.props.createPost(Post);
        }
    render(){
        
        return (
            <div>
                <h1>Add Post</h1>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label> Title:  </label><br />
                            <input type="text" name="title" onChange={this.onChange}  value={this.props.title}/>
                        </div>
                        <div>
                            <label> Body: </label><br />
                            <input type="text" name="body" onChange={this.onChange}  value={this.props.body}/>
                        </div>
                        <div>
                            
                            <input type="submit" value="submit" />
                        </div>
                    </form>
                
            </div>
        );
    }
}
PostForm.propTypes =  {
    createPost : propTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    createPost: post => createPost(post,dispatch)
})

export default connect(null,mapDispatchToProps)(PostForm);