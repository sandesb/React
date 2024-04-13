import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () =>{
const {id}=useParams();
const {username}=useParams();

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


 // Function to generate a random number between min and max (inclusive)
 function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to update the image source with a random number between 1 and 7
function updateAvatarImage() {
    // Get a random number between 1 and 7
    const randomNumber = getRandomNumber(1, 6);

    // Construct the new image URL with the random number
    const imageUrl = `https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava${randomNumber}-bg.webp`;

    // Get the image element by its ID
    const avatarImg = document.getElementById('avatarImg');

    // Update the src attribute of the image element
    if (avatarImg) {
        avatarImg.src = imageUrl;
    } else {
        console.error("Avatar image element not found.");
    }
}

// Call the updateAvatarImage function immediately when the script is encountered
updateAvatarImage();

// Call the updateAvatarImage function when the page is loaded or refreshed

    return (
        <div class="flex1">
         


            <section class="vh-100 profile-section">
    <div class="container py-5 h-100 profile-container">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-6 mb-4 mb-lg-0">
                <div class="card mb-3 profile-card">
                    <div class="row g-0">
                        <div class="col-md-4 gradient-custom text-center text-white profile-avatar">
                        <img id="avatarImg" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
     alt="Avatar" class="img-fluid my-5 avatar-image" />
              <h5>{user.username}</h5>
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Information</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-12 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{user.email}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Age</h6>
                    <p class="text-muted">{user.age}</p>
                  </div>
                </div>
                <h6>City</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Permanent</h6>
                    <p class="text-muted">{user.city}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Secondary</h6>
                    <p class="text-muted">N.A</p>
                  </div>
                </div>
                <div class="d-flex justify-content-start">
                  <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
          
        </div>
        );
    };

export default Detail;