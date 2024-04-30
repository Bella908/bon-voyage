import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetailes = () => {
    const{id} = useParams();
    console.log(id);
     const[spot , setSpot] = useState({});


    useEffect(() =>{
        fetch(`https://bon-voyage-server-ql3x12mvy-mumtahinas-projects-ec97b8c1.vercel.app/viewDetails/${id}`)
        .then(res => res.json())
        .then(data =>{
            setSpot(data)
            consol.log(data)
        })
    },[id])
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${spot.image})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mx-auto">
                        <h1 className="mb-5 text-5xl font-bold">{spot.tourists_spot_name}</h1>
                        <h3 className="mb-5 text-3xl font-semibold">{spot.country_Name}</h3>
                        <p className="mb-8">{spot.location}</p>
                
                    </div>
                </div>
            </div>
            <div className="flex m-8 gap-5">
            <div className="w-2/4">
                <img src={spot.image} alt="" />
            </div>
            <div className="py-3">
            <p className="">{spot.short_description}</p>
            <p className="">Average cost will be {spot.average_cost}</p>
            <p className="">Seasonality: {spot.seasonality}</p>
            <p className="">Travel time: {spot.travel_time}</p>
            <p className="">Tota Visitors PerYear: {spot.totaVisitorsPerYear}</p>

            </div>
            </div>
        </div>
    );
    
};

export default ViewDetailes;