import axios from 'axios';

const baseUrl = 'https://sticknpoke.herokuapp.com';

export const getAllTattoos = () => {
  return axios.get(`${baseUrl}/tattoos`);
};

export const getSingleTattoo = (id) => {
  return axios.get(`${baseUrl}/tattoos/${id}`);
};

export const createTat = (tattoo) => {
  return axios.post(`${baseUrl}/tattoos/create`, tattoo, {
    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
  });
};

// export const registerUser = (user) => {
//   return axios.post(`${baseUrl}/authentication/register/`, user);
// };

// export const loginUser = (user) => {
//   return axios.post(`${baseUrl}/login/`, user);
// };

export const registerUser = async (credentials) => {
  const options = {
    method: 'POST',
    url: `${baseUrl}/authentication/register/`,
    data: credentials,
  };

  const { data } = await axios.request(options);
  console.log(data);
  return data.message;
};

export const loginUser = async (credentials) => {
  const options = {
    method: 'POST',
    url: `${baseUrl}/authentication/login/`,
    data: credentials,
  };

  const { data } = await axios.request(options);
  if (data.token) {
    window.sessionStorage.setItem('token', data.token);
  } else {
    window.sessionStorage.removeItem('token');
  }
  console.log(data);
  return data.message;
};
