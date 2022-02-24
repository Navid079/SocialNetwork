import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

export const loginCall = async (username, password, dispatch) => {
  try {
    const res = await axios.post(`${api}/login`, {
      username,
      password,
    });
    const { jwt } = res.body;
    dispatch({ type: 'LOGIN', payload: { username, password, jwt } });
    return true;
  } catch {
    return false;
  }
};

export const signupCall = async (username, password, email, dispatch) => {
  try {
    const res = await axios.post(`${api}/signup`, {
      username,
      password,
      email,
    });
    return true;
  } catch {
    return false;
  }
};
