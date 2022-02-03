import React from 'react';
import NewPost from '../../components/NewPost/NewPost';
import Post from '../../components/Post/Post';

import './Home.css'

const Home = () => {
  return (
    <div className='home-page'>
      <NewPost
        className='home-page__item'
        avatar={require('../../assets/pp4.jpg')}
      />
      <Post
        className='home-page__item'
        avatar={require('../../assets/pp1.jpg')}
        username='user.1'
        location='place1'
        image={require('../../assets/post.jpg')}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ac vel a est elit id sagittis, malesuada.'
        likes='42'
        comments='17'
      />
      <Post
        className='home-page__item'
        avatar={require('../../assets/pp2.jpg')}
        username='user.2'
        location='place2'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ac vel a est elit id sagittis, malesuada.'
        likes='4'
        comments='1'
      />
      <Post
        className='home-page__item'
        avatar={require('../../assets/pp3.jpg')}
        username='user.3'
        location='place3'
        image={require('../../assets/post.jpg')}
        likes='103'
        comments='59'
      />
    </div>
  );
};

export default Home;