import React, { useEffect, useState,useContext } from "react";
import {Link} from 'react-router-dom';
import './Header.css'
// import AppContext from "../context/AppContext.js";
export default function Header(props) {
  let [category, setCategory] = useState([]);
  const url = "  http://localhost:3000/category";

  // let appContext=useContext(AppContext);

  async function getAllCategories() {
    let response = await fetch(url);
    let data = await response.json();
    setCategory(data);
    // console.log(data)
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className='header'>
    <div className="flex space-x-7  mt-1 text-red-800 mr-7">
          {category.map((category) => {
            return (
              <Link key={category} to={`categories/${category}`}>
                <p className="capitalize">{category}</p>
              </Link>
            );
          })}
          </div>

 <Link to="/login"><button className='login'>Login</button></Link>
    
    </div>
  )
}





  