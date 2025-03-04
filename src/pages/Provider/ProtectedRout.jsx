import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const ProtectedRout = ({children}) => {
    const {user ,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);
    
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
   return <Navigate  state ={{from:location}} to="/login" replace ></Navigate>
};

export default ProtectedRout;