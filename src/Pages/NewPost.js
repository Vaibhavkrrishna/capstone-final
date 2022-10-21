import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NewPost.css";
export default function NewPost() {
  let url = "http://localhost:3000/MyBlogs";
  let [post, setPost] = useState([]);
  let [loading, setLoading] = useState(true);
  let [newPost, setNewPost] = useState([]);
  let [authID, setNewAuthID] = useState([]);
  let [imageUrl, setNewImageUrl] = useState([]);
  let [category, setNewCategory] = useState([]);
  let [summary, setNewSummary] = useState([]);

  const categorys = [
    "Technical",
    "Fictional",
    "Science",
    "Finance",
    "History",
    "Health  & Fitness",
    "Politics",
    "Infotainment",
    "Miscellaneous",
  ];

  let getAllPost = async () => {
    let response = await fetch(url);
    let data = await response.json();
    setPost(data);
    setLoading(false);
  };

  let addPost = async (event) => {
    event.preventDefault();
    console.log("Adding New Post", newPost, authID,imageUrl,category, summary);
    let newPostAdd = {
      title: newPost,
      authorID: authID,
      category: category,
      summary: summary,
      imageUrl:imageUrl,
      time: new Date (),
      "Status of Blog": "Click button To Go To Text Editor",
    };
    let response = await fetch(url, {
      method: "POST",
      body:JSON.stringify(newPostAdd),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    console.log(data);
    setNewPost("");
    setNewAuthID("");
    setNewImageUrl("");
    setNewCategory("");
    setNewSummary("");
    getAllPost();
  };
  let deletePost = async (id) => {
    console.log("Deleting post with id", id);
    let response = await fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    // console.log(data);
    getAllPost();
  };
  useEffect(() => {
    getAllPost();
  }, []);
// const onUploadImage=(file)=>{
//   console.log("file",file);
//   const formData=new FormData();
//   formData.append("file",file);
//   formData.append("upload_preset","jnecgtem");
//   axios.post("http:/api.cloudinary.com/v1_1/db9eaq2ct/image/upload",formData)
//   .then((resp)=>{
//     setFormValue({...formValue,imageUrl:resp.data.url});
//   })
// }
  return (
    <div>
      {loading
        ? "  "
        : post.map((post) => {
            return (
              <>
                {console.log("data")}
                {/* <Post post={post} key={[post.id]} deletePost={deletePost} /> */}
              </>
            );
          })}
      <div className=" central-box">
        <h1 className=" text-center  text-white text-4xl font-black font-serif">
          Add New Post{" "}
        </h1>

        <form onSubmit={addPost} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-8 "
                for="grid-first-name"
              >
                Enter Title of Your Post
              </label>
              <input
                className="appearance-none block w-96 h-8 bg-gray-200 text-gray-700 border border-red-500 rounded  px-4  leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Add New Post Title"
                value={newPost}
                onChange={(event) => {
                  setNewPost(event.target.text);
                }}
              /></div>
            <p className="text-red-500 text-xs italic mt-20 pt-2">
                Trending Titles gets better views.
              </p>
              
              <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Enter an Image
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="url"
                placeholder="Add New Image"
                // value={newPost}
                onChange={(event) => {
                  setNewPost(event.target.url);
                }}
              />
              
            </div>
            <br />
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Enter your ID
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Add Author ID"
                value={authID}
                onChange={(event) => {
                  setNewAuthID(event.target.value);
                }}
              />
              <br />
            </div>
          </div>
          {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0"></div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >Image</label>

          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="file"
            placeholder="Add an Image"
            // value={imageUrl}
            onChange={(event) => {
              onUploadImage(event.target.files);
            }}
            
          /> */}
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                htmlFor="category"
              >
                Choose Blog Category
              </label>
              <select
                onChange={(event) => {
                  setNewCategory(event.target.value);
                }}
                value={category}
              >
                <option value="">Choose Category</option>
                {categorys.map((cat, index) => {
                  return (
                    <option value={cat} key={index}>
                      {cat}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* <input
            type="text"
            placeholder="Selected Catergory"
            value={category}
            onChange={(event) => {
              setNewCategory(event.target.value);
            }}
          /> */}
          <br />
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0"></div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Enter Summary
          </label>

          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Add Summary"
            value={summary}
            onChange={(event) => {
              setNewSummary(event.target.value);
            }}
          />
          <p className="text-gray-600 text-xs italic">
            Ideally between 75-100 words
          </p>

          {/* <br />
          <button className="" >Go To Editor</button>
          <br /> */}
          <br />
          <br />
         
            {" "}
            <button
              className="ring-4 border-double rounded-lg bg-green-200 font-serif text-xl "
              type="submit   "
            >
              Submit Details 
            </button>
         
           <Link to="/texteditor">
          <button
              className="ring-4 border-double rounded-lg bg-green-200 font-serif text-xl "
              
            >
              Go To Text Editor
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

function Post(props) {
  return (
    <>
      <h1>{props.post.title}</h1>
      <p
        onClick={() => {
          props.deletePost(props.post.id);
        }}
      >
        Delete Post
      </p>
    </>
  );
}

