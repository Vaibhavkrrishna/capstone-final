import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import LikeButton from './Like.js'
export default function Card() {
    let url= 'http://localhost:3000/users'

    let [post,setPost]=useState([])

    

    
    let[loading,SetLOading]=useState(true)

    let getAllPost= async ()=>{

        let response= await fetch(url)

        let data= await response.json()

        setPost(data)
        SetLOading(false)

    }
        useEffect(()=>{
            getAllPost()
        },[])
        
  return (
    <div >

         <div className='p-16 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>

      {loading? ("Fetching Blogs"):(

        post.map((post)=>{

          return(

             <div className='rounded overflow-hidden shadow-lg'>
             <img src={post.imageUrl} className="w-full h-56" alt="image"/>
              {/* image should be included here */}
              <div className='text-center py-4'>
             <Link to={`blogs/${post.id}`}> <div class="font-bold text-xl mb-2 text-blue-800 ">{post.title}</div> </Link>
              <p class="text-gray-700 text-base">
                {post.summary}
              </p>
              <div className='ml-40  mt-4'><LikeButton/></div>
              
              </div>
              </div>
          )

        })

      )}

    </div>
    </div>
            
           
          )
        }

