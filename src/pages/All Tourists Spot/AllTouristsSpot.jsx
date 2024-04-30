import React, { useEffect, useState }  from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSpot from './NewSpot';
import { Typewriter } from 'react-simple-typewriter'





const AllTouristsSpot = () => {


    const [spots, setNewSpots] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                // Fetch data from an API endpoint
                const response = await fetch('https://bon-voyage-server-ql3x12mvy-mumtahinas-projects-ec97b8c1.vercel.app/newSpot');
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

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    // Sort spots based on average_cost
    const sortedSpots = [...spots].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.average_cost - b.average_cost;
        } else {
            return b.average_cost - a.average_cost;
        }
    });


    return (
        <div>
            <div className='my-7'>
            <h4 className='text-3xl text-center'>
                    <Typewriter
                        words={['Tourists Sports']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h4>
              
                <div className="flex justify-center mt-4">
                    <label htmlFor="sortOrder">Sort by Average Cost:</label>
                    <select id="sortOrder" className="ml-2 p-2" onChange={handleSortChange}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            <div  className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-4'>

            {
                sortedSpots.map(spots => <NewSpot key={spots._id} newSpot={spots} ></NewSpot>)
            }
            </div>
           
        </div>
    );
};

export default AllTouristsSpot;