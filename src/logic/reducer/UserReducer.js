export default (state, { type, payload }) => {
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
      const posts = state.posts.slice();
      posts.push(payload.post);
      return {
        ...state,
        posts,
      };
    case 'UPDATE_POST':
      const { id, ...post } = payload;
      const { posts } = state;
      const fetchedPost = posts.filter(post => post.id === id);
      fetchedPost = { ...fetchedPost, ...post };
      return state;
    case 'SET_POSTS':
      const posts = payload.posts;
      return { ...state, posts };
    default:
      return state;
  }
};
