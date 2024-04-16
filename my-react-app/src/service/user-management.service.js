import axios from "axios";

const BASE_URL = 'http://localhost:4000/users';

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    axios.get(BASE_URL).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    });
  });
}

export const updateUser = (id, data) => {
  return new Promise((resolve, reject) => {
    axios.put(`${BASE_URL}/${id}`, data)
        .then(() => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        })
  });
}

export const addUser = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(BASE_URL, data)
        .then(() => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        })
  });
}

export const deleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${BASE_URL}/${userId}`)
        .then(() => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        })
  });
}

export const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/${id}`)
        .then((res) => {
          resolve(res.data);
        }).catch((err) => {
          reject(err);
        })
  });
}

export const searchByUsername = (username) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}?username=${username}`)
        .then((res) => {
          resolve(res.data);
        }).catch((err) => {
          reject(err);
        })
  });
}
export const searchByEmail = (email) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}?email=${email}`)
        .then((res) => {
          resolve(res.data);
        }).catch((err) => {
          reject(err);
        })
  });
}