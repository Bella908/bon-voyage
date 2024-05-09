import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ContryCard from "./ContryCard";


const Countries = () => {

 const [contries , setContry] = useState([]);


 useEffect(() =>{
    fetch('http://localhost:5000/countries')
    .then(res => res.json())
    .then(data => setContry(data));

 },[])

    return (
        <div>
            <h3 className="text-2xl font-semibold text-center my-16">Southeast Asia</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6">
            {
                contries.map(contry=> <ContryCard  contry={contry}></ContryCard>)
            }
            </div>
        </div>
    );
};

export default Countries;