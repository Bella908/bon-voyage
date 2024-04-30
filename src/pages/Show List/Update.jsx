import Lottie from "lottie-react";
import Car from '../Show List/Car.json'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";



const Update = () => {
    const{id} = useParams();
    console.log(id);
     const[spot , setSpot] = useState({});


     useEffect(() =>{
         fetch(`https://bon-voyage-server-ql3x12mvy-mumtahinas-projects-ec97b8c1.vercel.app/showList/update/${id}`)
        .then(res => res.json())
        .then(data =>{
            setSpot(data)
          
        })
    },[id])


    const handleUpdate = (e) => {
        e.preventDefault(); // Add e parameter and preventDefault() here
    
        const form = e.target;
    
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const short_description = form.short_description.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const image = form.image.value;
        const updteSpot = {
            tourists_spot_name,
            country_Name,
            location,
            average_cost,
            short_description,
            seasonality,
            travel_time,
            totaVisitorsPerYear,
            image
        };
    
        fetch(`https://bon-voyage-server-ql3x12mvy-mumtahinas-projects-ec97b8c1.vercel.app/showList/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updteSpot)
        })
        .then(res => res.json()
    .then(data =>{
        if(data.modifiedCount >0){
            Swal.fire({
                title: 'Success!',
                text: 'Update successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }

    }))
    }
       
    return (
        <div>
          <div className="container mx-auto px-4 py-8">
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                   <div className="rounded-lg p-4 flex items-center justify-center  bg-orange-300">
                       <Lottie animationData={Car} className="w-2/3" />
                   </div>
                   <div className="rounded-lg flex items-center justify-center ">
                      <form  onSubmit={handleUpdate}>
                           {/* set 1 */}
                           <div>
                           <h2 className="text-3xl font-bold my-6 text-center text-orange-300">Update</h2>
                           </div>
                           <div className='flex gap-16 my-10 rounded-sm'>

                           
                           
                           </div>
                           {/* set 3 */}
                           {/* set 2 */}
                           <div className='flex gap-16 my-10 rounded-sm'>
                           <label className="input input-bordered flex items-center gap-2">
                               
                               <input type="text" className="grow" placeholder="Country Name"name='country_Name' />
                           </label>

                           <label className="input input-bordered flex items-center gap-2">
                               <input type="text" className="grow" placeholder="Tourists Spot Name" name='tourists_spot_name' />
                               <hr />
                   
                           </label>
                           </div>
                           {/* set 3 */}
                           {/* set 1 */}
                           <div className='flex gap-16 my-10 rounded-sm'>

                           <label className="input input-bordered  flex items-center gap-2">
                               <input type="text" className="grow" placeholder="location" name='location' />
                               <hr />
                   
                           </label>
                           <label className="input input-bordered flex items-center gap-2">
                               <input type="text" className="grow" placeholder="Average Cost" name='average_cost' />
                               <hr />
                   
                           </label>
                           </div>
                           <label className="input input-bordered flex items-center gap-5">
                               
                               <input type="text" className="grow" placeholder="Short description" name='short_description'/>
                           </label>
                           {/* set 3 */}
                           {/* set 1 */}
                           <div className='flex gap-16 my-10 rounded-sm'>

                           <label className="input input-bordered flex items-center gap-2">
                               <input type="text" className="grow" placeholder="Seasonality - like summer, winter" name='seasonality'/>
                               <hr />
                   
                           </label>
                           <label className="input input-bordered flex items-center gap-2">
                               
                               <input type="text" className="grow" placeholder="Travel_time => like- 7 days" name='travel_time' />
                           </label>
                           </div>
                           <div className='flex gap-16 my-10 rounded-sm'>

                           <label className="input input-bordered flex items-center gap-2">
                               <input type="text" className="grow" placeholder="Total Visitors PerYear ex- like- 10000" name='totaVisitorsPerYear'/>
                               <hr />
                   
                           </label>
                           <label className="input input-bordered  flex items-center gap-2">
                               
                               <input type="url" className="grow" placeholder="Image ( use image URL)" name='image' />
                           </label>

                           </div>
                           <div>
                           <button className="btn btn-block sm:btn-sm md:btn-md lg:btn-lg bg-orange-300 text-white">Update</button>

                           </div>
                           {/* set 3 */}
                           
                       </form>

                   </div>
               </div>
           </div>
        </div>
    );
}
export default Update;