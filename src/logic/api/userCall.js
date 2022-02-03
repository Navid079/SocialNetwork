import axios from 'axios';

export const loginCall = async (username, password, dispatch) => {
  try {
    const res = await axios.post('url', {
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

export const loginCall = async (username, password, email, dispatch) => {
  try {
    const res = await axios.post('url', {
      username,
      password,
      email,
    });
    return true;
  } catch {
    return false;
  }
};
