
import { Link } from "react-router-dom";
const NewSpot = ({newSpot}) => {

const{tourists_spot_name,average_cost,seasonality,travel_time
    ,totaVisitorsPerYear,image,_id} = newSpot;


    return (
        <div>
           
           <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt={tourists_spot_name} className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#E0BC75] font-lora text-2xl">{tourists_spot_name}</h2>
                    <div className="flex gap-16 my-6 font-Raleway">
                        <div>

                        <p className="font-semibold">City</p>
                    <p>{travel_time}</p>
                        </div>
                        <div>

                        <p className="font-semibold">Space</p>
                    <p>{totaVisitorsPerYear}</p>
                        </div>
                        <div>

                        <p className="font-semibold">For Sale</p>
                    <p>{average_cost}</p>
                        </div>
                    </div>
                   
                    <hr />
                    <div className="flex justify-between">
                        <Link to={`/viewDetails/${_id}`}>
            
                    <button  className="btn bg-[#E0BC75] text-white font-lora text-[16px]">View Property</button>
                    </Link>
        
                        <div className="flex items-center gap-2">
                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSpot;