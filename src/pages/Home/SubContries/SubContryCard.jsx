import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const SubContryCard = () => {
    const { country_Name } = useParams(); 
    console.log(country_Name)// Use useParams to get the country_Name from the URL
    const [control, setControl] = useState(false);
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/countries/${country_Name}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
            .catch(error => console.error("Error fetching subcountries:", error));
    }, [country_Name, control]); 

    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 my-4">
            {item.map(c => (
                <div key={c.id}>
                   <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={c.image}  className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black font-lora text-2xl">{c.tourists_spot_name}</h2>
          <div className="flex gap-16 my-6 font-Raleway">

            <div>
              <p className="">Travel Time</p>
              <p className="">Tota Visitors PerYear</p>
              <p className="">Seasonality</p>
              <p className="">Average Cost</p>
              <p className="">Country
              </p>
            </div>
            <div>
              <p>{c.travel_time}</p>
              <p>{c.totaVisitorsPerYear}</p>
              <p>{c.seasonality}</p>
              <p>{c.average_cost}</p>
              <p>{c.country_Name}</p>

            </div>
          </div>

          <hr />
          <div className="flex justify-between">
            <Link to={`/viewDetails/${c._id}`}>

              <button className="btn bg-orange-400 text-white font-lora text-[16px]">View Details</button>
            </Link>

            <div className="flex items-center gap-2">

            </div>
          </div>
        </div>
      </div>

                </div>
            ))}
        </div>
    );
};

export default SubContryCard;
