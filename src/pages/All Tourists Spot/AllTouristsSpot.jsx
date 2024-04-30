import React, { useEffect, useState }  from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSpot from './NewSpot';






const AllTouristsSpot = () => {


    const [spots, setNewSpots] = useState([]);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                // Fetch data from an API endpoint
                const response = await fetch('http://localhost:5000/newSpot');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                // Extract JSON data from the response
                const data = await response.json();
                // Update state with the fetched data
                setNewSpots(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function when the component mounts
        fetchData();

        // Cleanup function (optional)
        return () => {
            // Any cleanup code can go here
        };
    }, [])



    return (
        <div>
            <div className='my-7'>
                <h4 className='text-3xl text-center'>Tourists Sports</h4>
            </div>
            <div  className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-4'>

            {
                spots.map(spots => <NewSpot key={spots._id} newSpot={spots} ></NewSpot>)
            }
            </div>
           
        </div>
    );
};

export default AllTouristsSpot;