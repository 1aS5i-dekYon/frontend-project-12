export const getToken = () => JSON.stringify(localStorage.getItem('token')).slice(3, -3);

export const getUsername = () => JSON.stringify(localStorage.getItem('username')).slice(3, -3);

export const setToken = ({ token, username }) => {
  localStorage.setItem('token', JSON.stringify(token));
  localStorage.setItem('username', JSON.stringify(username));
}

export const removeToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
}

export const clearStorage = () => localStorage.clear();
