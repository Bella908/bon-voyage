import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import NewSpot from './NewSpot';

const AllTouristsSpot = () => {
    const [spots, setSpots] = useState([]);
    const [filteredSpots, setFilteredSpots] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/newSpot');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setSpots(data);
                setFilteredSpots(data); // Initialize filtered spots with all spots
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const updatedSpots = [...spots];
        updatedSpots.sort((a, b) => {
            return sortOrder === 'asc' ? a.average_cost - b.average_cost : b.average_cost - a.average_cost;
        });
        setFilteredSpots(updatedSpots);
    }, [spots, sortOrder]);

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div>
            <div className='my-7'>
                <h4 className='text-3xl text-center'>
                    <Typewriter
                        words={['Tourist Spots']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h4>
                <div className="flex justify-center mt-4">
                    <label htmlFor="sortOrder">Sort by Cost:</label>
                    <select
                        id="sortOrder"
                        className="ml-2 p-2"
                        value={sortOrder}
                        onChange={handleSortOrderChange}
                    >
                        <option value="asc">Ascending</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-4'>
                {filteredSpots.map((spot) => (
                    <NewSpot key={spot._id} newSpot={spot} />
                ))}
            </div>
        </div>
    );
};

export default AllTouristsSpot;
