import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSpot from './NewSpot';

const AllTouristsSpot = () => {
    const newSpots = useLoaderData();
    return (
        <div>
           
            {
                newSpots.map(newSpot => <NewSpot key={newSpot._id} newSpot={newSpot} ></NewSpot>)
            }
        </div>
    );
};

export default AllTouristsSpot;