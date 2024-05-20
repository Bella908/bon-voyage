import { useEffect, useState } from "react";

const useServices = (asc, search) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch(` https://bon-voyage-server-a69z3n71q-mumtahinas-projects-ec97b8c1.vercel.app/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch services');
                }
                const data = await response.json();
                setServices(data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, [asc, search]);

    return services;
};

export default useServices;
