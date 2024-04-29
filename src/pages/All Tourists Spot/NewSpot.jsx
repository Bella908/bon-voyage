

const NewSpot = ({newSpot}) => {

const{name , email ,tourists_spot_name,country_Name,location ,average_cost,short_description,seasonality,travel_time
    ,totaVisitorsPerYear,image} = newSpot;


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewSpot;