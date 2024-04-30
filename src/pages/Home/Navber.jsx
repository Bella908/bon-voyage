import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {
  const {user , logOut} = useContext(AuthContext);
  const [theme ,setTheme] = useState('light')


  useEffect(() =>{
    localStorage.setItem('theme',theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme' ,localTheme)
  },[theme])

  const handleToggle = (e) =>{
   if(e.target.checked){
    setTheme('coffee')
   }
   else{
    setTheme('light')
   }
  }
  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()
      }

    return (
        <div>
            <div className="navbar bg-white bg-opacity-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to ="/" ><a>Home</a></NavLink></li>
    <li><NavLink to ="/allTouristsSpot" ><a>All Tourists Spot</a></NavLink></li>
    <li><NavLink to ="/addTouristsSpot" ><a> Add Tourists Spot</a></NavLink></li>
    <li><NavLink to ="/showList" ><a>My List </a></NavLink></li>
        
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BON-Voyage </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
    <li ><NavLink to ="/" ><a>Home</a></NavLink></li>
    <li><NavLink to ="/allTouristsSpot" ><a>All Tourists Spot</a></NavLink></li>
    <li><NavLink to ="/addTouristsSpot" ><a> Add Tourists Spot</a></NavLink></li>
    <li><NavLink to ="/showList" ><a>My List </a></NavLink></li>

      
    </ul>
  </div>
  <input  onChange={handleToggle} type="checkbox"  className="toggle theme-controller"/>

    {
      user? <>
          <span></span>
      <button onClick={handleSignOut} className="btn mx-2">Log Out</button>

      <div className="avata " >
  <div className="w-12" >
    <div className="tooltip tooltip-bottom" data-tip={user.displayName}> 

    <img src={user.photoURL} className="rounded-full" />
    
    </div>
  </div>
</div>
      </>
      :
      <div className="navbar-end gap-5">
    <Link to="/logIn">
    <a className="btn bg-orange-300 text-slate-50">Log-In</a>
    </Link>
    <Link to="/register">
    <a className="btn bg-orange-600 text-slate-50">Register</a>
    </Link>
        </div>
  

    }
  </div>

</div>
        
    );
};

export default Navber;