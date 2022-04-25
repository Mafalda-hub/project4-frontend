import axios from 'axios';

const baseUrl = 'https://sticknpoke.herokuapp.com';

export const getAllTattoos = () => {
  return axios.get(`${baseUrl}/tattoos`);
};

export const getSingleTattoo = (id) => {
  return axios.get(`${baseUrl}/tattoos/${id}`);
};

export const createTat = async (tattoo) => {
  const options = {
    method: 'POST',
    url: `${baseUrl}/tattoos/create`,
    data: tattoo,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };
  const { data } = await axios.request(options);
  return data;
};
// export const createTat = () => {
//   return axios.post(`${baseUrl}/tattoos/create`, {
//     headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
//   });
// };

export const getCategories = async () => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/categories/`,
  };
  const { data } = await axios.request(options);
  return data;
};

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

export function getLoggedInUserId() {
  const token = sessionStorage.getItem('token');
  if (!token) return false; // safety in case no token

  const userObject = JSON.parse(window.atob(token.split('.')[1]));
  return userObject.sub;
}

export const removeToken = () => {
  window.sessionStorage.removeItem('token');
};
export const removeUserId = () => {
  window.sessionStorage.removeItem('userId');
};
