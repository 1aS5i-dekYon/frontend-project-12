export const getToken = () => JSON.stringify(localStorage.getItem('token'));
export const setToken = (token) => localStorage.setItem('token', JSON.stringify(token));
export const removeToken = () => localStorage.removeItem('token');
export const clearStorage = () => localStorage.clear();
