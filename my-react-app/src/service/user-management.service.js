import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref,orderByChild, push, onValue, remove, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


// import { getDatabase, ref, child, get } from "firebase/database";
const firebaseConfig = {
  databaseURL: 'https://publication-2a5e4-default-rtdb.europe-west1.firebasedatabase.app',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const BASE_URL = 'http://localhost:4000/users';




export const getAllUsers = () => {
  const dbRef = ref(getDatabase());
  const usersRef = child(dbRef, "users"); // Assuming "users" is the key where your users are stored

  return get(usersRef).then((snapshot) => {
    const usersData = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        usersData.push(userData);
      });
      return usersData;
    } else {
      return []; // Return an empty array if no data exists
    }
  }).catch((error) => {
    throw error; // Rethrow the error to handle it in the component
  });
};


// export const getUsersBySemester = (semester) => {
//   const dbRef = ref(getDatabase());
//   const usersRef = child(dbRef, 'users');

//   return get(usersRef).then((snapshot) => {
//     const usersData = [];
//     if (snapshot.exists()) {
//       snapshot.forEach((childSnapshot) => {
//         const userData = childSnapshot.val();
//         if (userData.sem === semester) {
//           usersData.push(userData);
//         }
//       });
//       return usersData;
//     } else {
//       return []; // Return an empty array if no data exists
//     }
//   }).catch((error) => {
//     throw error; // Rethrow the error to handle it in the component
//   });
// };
// export const getAllUsers1 = () => {
  
//   const dbRef = ref(getDatabase());
//   const usersRef = child(dbRef, `users.json/?sem=${values}`); // Assuming "users" is the key where your users are stored
//   return get(usersRef).then((snapshot) => {
//     const usersData = [];
//     if (snapshot.exists()) {
//       snapshot.forEach((childSnapshot) => {
//         const userData = childSnapshot.val();
//         usersData.push(userData);
//       });
//       return usersData;
//     } else {
//       return []; // Return an empty array if no data exists
//     }
//   }).catch((error) => {
//     throw error; // Rethrow the error to handle it in the component
//   });
// };

// export const getAllUsers = () => {
//   return new Promise((resolve, reject) => {
//     axios.get(BASE_URL).then((res) => {
//       resolve(res.data);
//     }).catch((err) => {
//       reject(err);
//     });
//   });
// }

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