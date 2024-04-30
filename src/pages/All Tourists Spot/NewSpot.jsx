
import { Link } from "react-router-dom";
const NewSpot = ({ newSpot }) => {

  const { tourists_spot_name, average_cost, seasonality, travel_time
    , totaVisitorsPerYear, image, _id } = newSpot;


  return (
    <div>

      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt={tourists_spot_name} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black font-lora text-2xl">{tourists_spot_name}</h2>
          <div className="flex gap-16 my-6 font-Raleway">

            <div>
              <p className="">Travel Time</p>
              <p className="">Tota Visitors PerYear</p>
              <p className="">Seasonality</p>
              <p className="">Average Cost
              </p>
            </div>
            <div>
              <p>{travel_time}</p>
              <p>{totaVisitorsPerYear}</p>
              <p>{seasonality}</p>
              <p>{average_cost}</p>

            </div>
          </div>

          <hr />
          <div className="flex justify-between">
            <Link to={`/viewDetails/${_id}`}>

              <button className="btn bg-red-500 text-white font-lora text-[16px]">View Details</button>
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