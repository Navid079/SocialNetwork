export default (state, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        username: payload.username,
        email: payload.email,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        username: '',
        email: '',
        isLoggedIn: false,
      };
    case 'ADD_POST':
      const posts = state.posts.slice();
      posts.push(payload.post);
      return {
        ...state,
        posts,
      };
    default:
      return state;
  }
};
