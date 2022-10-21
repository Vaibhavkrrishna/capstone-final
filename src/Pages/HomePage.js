import React from 'react'
import Card from '../components/Card.js'
// import {useContext,useState} from "react";
// import { AuthContext } from '../context/Auth.context.js';
// import Login from '../Pages/Login.js';
// import Dashboard from '../Pages/Dashboard.js';
// import { Route, Routes } from "react-router-dom";
// import {Link} from 'react-router-dom';
// import App from '../App.js';
import Header from '../components/Header.js';
export default function HomePage() {
 
    // const HandleLogin=()=>{
    //      const { state } = useContext(AuthContext);
    //     {state.isLoggedIn?(
    //         ( 
    //         <Login/>
    //         )):(

    //         ( <Dashboard/>))
          
    //         }
    // }
  return (
    
//         <header>
// <div className='bg-white w-full h-8'>
// <Link to="/login"><button>Log in</button></Link>
// </div>
//         </header>
    <>
      {/* //         <header>
      // <div className='bg-white w-full h-8'>
      // <Link to="/login"><button>Log in</button></Link>
      // </div>
      //         </header> */}
      <><Header /></>
      <div className='flex flex-wrap justify-between'>
        <Card />
      </div></>
    
  )
}
