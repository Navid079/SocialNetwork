import axios from 'axios';

export const newPost = async (username, text, image, jwt, dispatch) => {
  try {
    const res = await axios.put('url', {
      username,
      text,
      image,
      jwt,
    });
    const { postId } = res.body;
    const post = {
      id: postId,
      username,
      text,
      image,
      likes: 0,
    };
    dispatch({ type: 'ADD_POST', payload: { post } });
    return true;
  } catch {
    return false;
  }
};

export const likePost = async (postId, dispatch) => {
  try {
    const res = axios.patch('url', {
      id: postId,
    });
    const { newLikesCount } = res.body;
    dispatch({ type: 'UPDATE_POST', payload: { id, likes: newLikesCount } });
    return true;
  } catch {
    return false;
  }
};

export const fetchPosts = async dispatch => {
  try {
    const res = await axios.get('url');
    const { posts } = res.body;
    dispatch({ type: 'SET_POSTS', payload: { posts } });
  } catch {}
};
