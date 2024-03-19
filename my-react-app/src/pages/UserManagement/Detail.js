import { useParams } from "react-router-dom";


const Detail = () =>{
const {id}=useParams();
    return (
        <div>
            <h1>User Details {id}</h1>
            <img class="club" src="/club1.png"></img>

        </div>

        );
    };

export default Detail;