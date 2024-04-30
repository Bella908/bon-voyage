import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSpot from './NewSpot';

const AllTouristsSpot = () => {
    const newSpots = useLoaderData();
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-4'>
           
            {
                newSpots.map(newSpot => <NewSpot key={newSpot._id} newSpot={newSpot} ></NewSpot>)
            }
        </div>
    );
};

export default AllTouristsSpot;