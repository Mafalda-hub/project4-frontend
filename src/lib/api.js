import axios from 'axios';

const baseUrl = 'https://sticknpoke.herokuapp.com';

export const getAllTattoos = () => {
  return axios.get(`${baseUrl}/tattoos`);
};

export const getSingleTattoo = (id) => {
  return axios.get(`${baseUrl}/tattoos/${id}`);
};

export const createTat = (tattoo) => {
  return axios.post(`${baseUrl}/tattoos`, tattoo, {
    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
  });
};

export const registerUser = (user) => {
  return axios.post(`${baseUrl}/register`, user);
};

export const loginUser = (user) => {
  return axios.post(`${baseUrl}/login`, user);
};
