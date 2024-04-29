import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ShowList = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([]);
    const [control ,setControl] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/showList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            });
    }, [user , control]);

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
              fetch(`http://localhost:5000/showList/delete/${id}`, {
                  method: "DELETE",
              })
              .then(res => res.json())
              .then(data => {
                  if(data.deletedCount > 0) {
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
            {
                item?.map(p => (
                    <div key={p._id}>
                        <h1>name : {p.location}</h1>
                        <Link to={`/showList/update/${p._id}`}>
                            <button>Update</button>
                        </Link>
                        <button onClick={() => handleDelete(p._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default ShowList;
