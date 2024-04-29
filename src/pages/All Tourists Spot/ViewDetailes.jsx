import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetailes = () => {
    const{id} = useParams();
    console.log(id);
     const[spot , setSpot] = useState({});


    useEffect(() =>{
        fetch(`http://localhost:5000/viewDetails/${id}`)
        .then(res => res.json())
        .then(data =>{
            setSpot(data)
            consol.log(data)
        })
    },[id])
    return (
        <div>
           name = {spot.country_Name}
        </div>
    );
};

export default ViewDetailes;