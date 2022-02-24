export default (state, { type, payload }) => {
  let posts;
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        username: payload.username,
        email: payload.email,
        jwt: payload.jwt,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        username: '',
        email: '',
        jwt: '',
        isLoggedIn: false,
      };
    case 'ADD_POST':
      posts = state.posts.slice();
      posts.push(payload.post);
      return {
        ...state,
        posts,
      };
    case 'UPDATE_POST':
      const { id, ...post } = payload;
      posts = state.posts;
      const fetchedPost = posts.filter(post => post.id === id);
      fetchedPost = { ...fetchedPost, ...post };
      return state;
    case 'SET_POSTS':
      posts = payload.posts;
      return { ...state, posts };
    default:
      return state;
  }
};
