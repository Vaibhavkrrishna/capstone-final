import React, { useEffect, useState } from 'react'

import {Link, useParams} from 'react-router-dom'
import MyBlogs from '../Pages/MyBlogs';
import SideBar from './SideBar';
export default function MainBlog() {
    let {id} =useParams();
    let url= 'http://localhost:3000/blogs/'
    let [blogs,setBlogs]=useState([])

    let[loading,SetLOading]=useState(true)
    let getAllBlogs= async ()=>{
        let response= await fetch(url+id)
        let data= await response.json()
        setBlogs(data)
        SetLOading(false)
        console.log(data)
    }

        useEffect(()=>{
            getAllBlogs()
        },[])
  return (
    <div className='w-10/12 h-screen items-center mx-auto'>
    <div className='justify-start' >
         {/* <div className='p-16 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 '> */}
         <div className='h-full'>
          {/* <SideBar/> */}
    </div>
    <h1 className='flex justify-center text-3xl'>{blogs.title}</h1>
    <img className='h-80  transition mt-4 mb-8 mx-auto ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 items-center' src={blogs.imageUrl}/>
    <p className=' leading-8 w-full '> {blogs.blog}</p>
    </div>
    </div>

  )

}  
