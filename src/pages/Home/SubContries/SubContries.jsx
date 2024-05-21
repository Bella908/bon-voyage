import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SubCountries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch('https://bon-voyage-server-gilt.vercel.app/countries');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className='text-center text-4xl my-40'>
                <h4>Discover the South</h4>
            </div>
            <div>
                <ul className='grid grid-cols-1 lg:grid-cols-3 gap-3 mx-9'>
                    {countries.map((country, index) => (
                        <li key={index}>
                            <Link to={`/countries/${country.country_Name}`}>
                                <div className="card w-96 h-[450px] bg-base-100 shadow-xl">
                                    <figure>
                                        <img src={country.image} alt={country.country_Name} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{country.country_Name}</h2>
                                        <p>{country.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SubCountries;
