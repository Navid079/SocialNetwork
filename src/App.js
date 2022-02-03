import React from 'react';

import './App.css';
import NewPost from './components/NewPost/NewPost';
import Post from './components/Post/Post';

function App() {
  return (
    <div className='App'>
      <NewPost />
      <Post />
    </div>
  );
}

export default App;
