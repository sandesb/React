import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const Detail = () =>{
const {id}=useParams();
const {username}=useParams();
// const data = [
//     {
//         id: 1,
//         username: 'John',
//         email: 'jon@gmail.com',
//         age: 25,
//         city: 'New York'
//     },
//     {
//         id: 2,

//         username: 'Cena',
//         email: 'cena@gmail.com',
//         age: 30,
//         city: 'New Jersey'
//     },
//     {
//         id: 3,

//         username: 'Brock',
//         email: 'brock@gmail.com',
//         age: 22,
//         city: 'Old York'
//     },
//     {
//         id: 4,
//         username: 'Lesnar',
//         email: 'lesnar@gmail.com',
//         age: 52,
//         city: 'New Berry'
//     },
// ]
const [user, setUser] = useState({
    username:"",
    email:"",
    age:"",
    city:"",

});

 useEffect(()=>{
    axios
        .get(`http://localhost:4000/users/${id}`)
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch((err) => {  // Corrected the opening bracket for catch
          alert("API Server Error");
          console.log(err);
        });
    }, []);
//     const newUser = data.find((obj)=>obj.id.toString()===id.toString())
//     setUser(newUser);
// }, []);

    return (
        <div>
            {/* <h1>User Details {id} {username}</h1> */}
            <div>Username: {user.username}</div>
            <div>Age: {user.age}</div>
            <div>City: {user.city}</div>
            <div>Email: {user.email}</div>
        </div>
        );
    };

export default Detail;