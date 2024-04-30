import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ShowList = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([]);
    const [control, setControl] = useState(false);


    useEffect(() => {
        fetch(`https://bon-voyage-server-ql3x12mvy-mumtahinas-projects-ec97b8c1.vercel.app/showList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            });
    }, [user, control]);

    const handleDelete = (id) => {
        // Display SweetAlert confirmation dialog
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // If confirmed, proceed with deletion
                fetch(`https://bon-voyage-server-ql3x12mvy-mumtahinas-projects-ec97b8c1.vercel.app/showList/delete/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setControl(!control);
                            // Show success message after deletion
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Contry Name</th>
                            <th>Tourists spot</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item?.map(p => <tr key={p._id}>
                                <th>1</th>
                                <td>{p.country_Name}</td>
                                <td>{p.tourists_spot_name}</td>

                                <td>{p.location}</td>
                                <td>
                                    <div className='my-2'>
                                        <Link to={`/showList/update/${p._id}`}>

                                            <button className="btn bg-orange-300 text-white ">Update</button>
                                        </Link>
                                        </div>

                                        <button onClick={() => handleDelete(p._id)} className="btn bg-red-500 text-white">Delete</button>
                                    
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* {
                item?.map(p => (
                    <div key={p._id}>
                        <h1>name : {p.location}</h1>

                        <Link to={`/showList/update/${p._id}`}>
                            <button>Update</button>
                        </Link>
                        <button onClick={() => handleDelete(p._id)}>Delete</button>
                    </div>
                ))
            } */}
        </div>
    );
};

export default ShowList;
