import React from 'react';
import { Provider } from 'react-redux'

import Posts from './Components/Posts'
import PostForm from './Components/PostForm'

import store from './Components/Store'


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Posts />
    </div>
    </Provider>
    
  );
}

export default App;
