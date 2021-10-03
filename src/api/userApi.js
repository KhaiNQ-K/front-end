import axiosClient from './axiosClient';

const userApi = {
  getAll: (params) => {
    const url = '/users';
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `users/${id}`;
    return axiosClient.get(url);
  },
  create: (payload) => {
    const url = 'users';
    return axiosClient.post(url, payload);
  },
  update: (id, payload) => {
    const url = `users/${id}`;
    return axiosClient.put(url, payload);
  },
  delete: (id) => {
    const url = `users/${id}`;
    return axiosClient.delete(url);
  },
};
