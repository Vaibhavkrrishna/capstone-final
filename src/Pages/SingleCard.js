import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainBlog from '../components/MainBlog';

export default function SingleCard() {

  let {id} = useParams();
  let [posts,setPosts] = useState([]);
  let [loading,setLoading] = useState(true);
  const url = "http://localhost:3000/users/"

  
  async function getPostData(){
    let response = await fetch(url+id);
    let data = await response.json()
    console.log(data);
    setPosts(data);
    setLoading(false)
  }

  useEffect(()=>{
    getPostData();
  },[]);

  return (
    <div className='max-w-7xl mx-auto'>
    {loading? ("Fetching post Data"):(
   
        <>
        <div className=''>
        <p className='text-blue-900 pt-5 text-4xl font-bold text-center mx-auto'>{posts.title}</p>
        <div className=' shadow-md sm:w-full   p-4 flex flex-wrap justify-evenly'>
          <img src={posts.imageUrl} className="h-64  transition mt-4 mb-8 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 " alt=" " /> 
          

        <div className='mt-16 mr-36 font-serif leading-8 ml-20'>
        <p className='text-black '><span className='text-blue-500'>CATEGORY<br/> </span>{posts.category}</p>
        <p className='text-black mt-3'><span className='text-blue-500'>AUTHOR ID <br/> </span> {posts.authorID}</p>
        <p className='text-black mt-3'><span className='text-blue-500'>SUMMARY <br/> </span> {posts.summary}</p>
        <p className='text-black mt-3'><span className='text-blue-500'> <br/> </span> {posts.blognew}</p>

        </div>
        </div>
        </div>
        {/* <MainBlog/> */}
        </>

    )}
    </div>
  )
}
