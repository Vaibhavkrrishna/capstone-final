import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import React, { useEffect, useState } from 'react'
import {delta} from 'react-quill'

const  modules  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
};

const TextEditor = () => {

    let url = "http://localhost:3000/blogs";
    const [newblog,setNewBlog] =  useState("");
    const [blog,setBlog] =  useState("");
    const [value, setValue] = useState('');
    let [loading,setLoading]=useState(true)

   
  //  let getAllBlogs = async () => {
  //   let response = await fetch(url);
  //   let data = await response.json();
  //    setBlog(data);
  //   setLoading(false);
  // };
  let addBlog = async(event)=>{
    event.preventDefault()
    console.log("Adding New Blog",newblog)
    let blogToAdd={
      blog:newblog,
    //   time of entry 
    }
    let response=await fetch(url,{
      method:"POST",
      body:JSON.stringify(blogToAdd),
      headers:{
        "Content-Type":"application/json"
      },

    })
    let data=await response.json();
    console.log(data)
    setNewBlog("")
    // getAllBlogs();
  }

  useEffect(()=>{
    // getAllBlogs ()
    
  },[])
function handleChange(content, delta, source, editor) {
  setValue(delta);
  setValue(editor.getContents());
}
  
function submit(e) {
  e.preventDefault();
  console.log(value);
  addBlog()
}



    return (
      <>
      <div className='h-screen' >
      <form onSubmit={addBlog} >
        <ReactQuill  modules={modules} theme="snow" value={newblog} 
        
        onChange={setNewBlog}/>
       {newblog}
        {/* <p> value</p> */}
        {/* {newblog} < */}
        {console.log(newblog)}
        <button onClick={submit}>Submit</button>
        <button
              className="ring-4 border-double rounded-lg bg-green-200 font-serif text-xl "
              type="submit"
            >
              Submit Details 
            </button>
        </form>
        </div>
        


        </>
    )
}

export default TextEditor;