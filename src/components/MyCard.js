// import React, { useEffect, useState } from 'react'
// import {Link} from 'react-router-dom'
// import LikeButton from './Like.js'
// import EditForm from './Edit.js'
// export default function MyCard() {
//     let url= 'http://localhost:3000/MyBlogs '

//     let [post,setPost]=useState([])
//     let[loading,SetLOading]=useState(true)
//     let getAllPost= async ()=>{

//         let response= await fetch(url)

//         let data= await response.json()

//         setPost(data)
//         SetLOading(false)

//     }

//     let deleteTodo= async(id)=>{
//       console.log("Deleting todo with id", id);
//       let response=await fetch(url+'/'+ id,{
//         method:"DELETE",
//         headers:{
//           "Content-Type": "application/json"
//         }
//       })
//       let data=await response.json();
//       console.log(data)
//       getAllPost()
//     }

//         useEffect(()=>{
//             getAllPost()
//         },[])

//   return (
//     <div >

//          <div className='p-16 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>

//       {loading? ("Fetching Blogs"):(

//         post.map((post)=>{

//           return(

//              <div className='rounded overflow-hidden shadow-lg'>
//              <img src={post.imageUrl} className="w-full h-56" alt="image"/>
//               {/* image should be included here */}
//               <div className='text-center py-4'>
//              <Link to={`blogs/${post.id}`}> <div class="font-bold text-xl mb-2 text-blue-800 ">{post.title}</div> </Link>
//               <p class="text-gray-700 text-base">
//                 {post.summary}
//               </p>

//               <button onClick={<EditForm/>}>Edit</button>
//               <button onClick={
//       deleteTodo(post.id)
//     }>Delete</button>
//               </div>
//               </div>
//           )

//         })

//       )}

//     </div>
//     </div>
//           )
//         }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LikeButton from "./Like.js";
import EditForm from "./Edit.js";
import EditFormDetails from "../Pages/EditFormDetails.js";
import { Route, Routes } from "react-router-dom";
export default function MyCard() {
  let url = "http://localhost:3000/MyBlogs/";
  // let postId=

  let [post, setPost] = useState([]);
  let [loading, SetLOading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  let [newTitle, setNewTitle] = useState();

  let getAllPost = async () => {
    let response = await fetch(url);
    let data = await response.json();
    setPost(data);
    SetLOading(false);
  };

  let deleteArticle = async (id) => {
    console.log("Deleting article with id", id);
    let response = await fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    getAllPost();
  };
  let editArticle = async (id) => {
    {console.log(id)}
    // event.preventDefault();
    console.log("Edit article with id", id,newTitle);
    let newPostAdd = {
      title: newTitle
    }
    let response = await fetch(url +id, {
      method: "PATCH",
      body:JSON.stringify(newPostAdd),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    setNewTitle("");
    getAllPost();
  };

  useEffect(() => {
    getAllPost();
  }, []);
  

  return (
    <div>
      <div className="p-16 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
        {loading
          ? "Fetching Blogs"
          : post.map((post) => {
              return (
                <Article
                  post={post}
                  key={post.id}
                  deleteArticle={deleteArticle}
                  editArticle={editArticle}
                />
              );
            })}
      </div>
      <div></div>
    </div>
  );

  function Article(props) {
    return (
      <div className="rounded overflow-hidden shadow-lg">
        
        <Link to={"/editformdetails"} >
      <img src={props.post.imageUrl} className="w-full h-56" alt="image" />
     </Link>
      
        {/* image should be included here */}
        <div className="text-center py-4">
          <Link to={`blogs/${props.post.id}`}>
            {" "}
            <div class="font-bold text-xl mb-2 text-blue-800 ">
              {props.post.title}
            </div>{" "}
          </Link>
          <p class="text-gray-700 text-base">
            {props.post.summary}
            <button
              onClick={() => {
                props.editArticle(props.post.id);
              }}
            >
              Edit
            </button>
           {/* <button>Edit Route Final</button>
             <button
              onClick={{EditFormDetail}}
            >
              Edit Route
            </button> */}
            <button
              onClick={() => {
                props.deleteArticle(props.post.id);
              }}
            >
              Delete Article
            </button>
            <input 
                type="text"
                placeholder="Enter New Title"
                value={newTitle}
                onChange={(event) => {
                  setNewTitle(event.target.value);
                }}
              />

            {/* <form onSubmit={editArticle} >
              <input
                name="edit"
                type="text"
                placeholder="Edit Article"
                value={newTitle}
                onChange={(event) => {
                  setNewTitle(event.target.value);
                }}
              />
              <button
                className="ring-4 border-double rounded-lg bg-green-200 font-serif text-xl "
                type="submit"
              >
                Submit New Title
              </button>
            </form> */}
          </p>
        </div>
        
      </div>
    );
  }
}
<Routes>
<Route path='/editformdetails' element={<EditFormDetails/>}/>
</Routes>
const EditFormDetail=()=>{


return(
  <>
 { console.log("function call")}
  <h1>n this snippet, you will learn how to update a resource with the Fetch API using the PATCH method. We'll be calling the external fake API to test this so let's get started.
  The external fake API that we'll be calling is the "JSONPlaceholder" and below is the endpoint.n this snippet, you will learn how to update a resource with the Fetch API using the PATCH method. We'll be calling the external fake API to test this so let's get started.
The external fake API that we'll be calling is the "JSONPlaceholder" and below is the endpoint.n this snippet, you will learn how to update a resource with the Fetch API using the PATCH method. We'll be calling the external fake API to test this so let's get started.
The external fake API that we'll be calling is the "JSONPlaceholder" and below is the endpoint.</h1>
<EditFormDetails/>
</>
)
} 