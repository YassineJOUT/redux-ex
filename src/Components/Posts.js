import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../Actions/postActions'


class Posts extends Component{
    componentWillMount(){
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render(){
        const postItems = this.props.posts.map(
            elem => (<div key={elem.id}><h2>{elem.title}</h2><p>{elem.body}</p><br/></div>)
        );
        return (
            <div>
                <h1>Posts</h1>
                    { postItems }
            </div>
        );
    }
}

Posts.propTypes =  {
    fetchPosts : propTypes.func.isRequired,
    posts : propTypes.array.isRequired,
    newPost : propTypes.object
}

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => fetchPosts(dispatch)
})

const mapStateToProps = state => ({
    posts : state.posts.items,
    newPost : state.posts.item
})
export default connect(mapStateToProps,mapDispatchToProps)(Posts);