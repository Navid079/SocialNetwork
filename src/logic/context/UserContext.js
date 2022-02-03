import { createContext, useReducer } from 'react';
import UserReducer from '../reducer/UserReducer';

const INITIAL = {
  username: '',
  email: '',
  avatar: require('../../assets/pp4.jpg'),
  posts: [],
  isLoggedIn: false,
};

const UserContext = createContext(INITIAL);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
