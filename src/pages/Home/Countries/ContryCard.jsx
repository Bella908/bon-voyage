

const ContryCard = ({contry}) => {
    const {name,image,description
    } = contry;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
   
  </div>
</div>
        </div>
    );
};

export default ContryCard;