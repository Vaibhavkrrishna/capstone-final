import React, { useContext, useState } from "react";
import { AuthContext } from "./context/Auth.context.js";
import Login from "./Pages/Login.js";
import Dashboard from "./Pages/Dashboard.js";
import { Route, Routes } from "react-router-dom";
import NewPost from "./Pages/NewPost.js";
import SideBar from "./components/SideBar.js";
import MyBlogs from "./Pages/MyBlogs.js";
import HomePage from "./Pages/HomePage";
import SingleCard from "./Pages/SingleCard.js";
import TextEditor from "./Pages/TextEditor";
import ProductCard from "./components/ProductCard";
import "./App.css";
import EditFormDetails from "./Pages/EditFormDetails.js";
import CategoryPage from "./Pages/CategoryPage.js";
import SingleBlogPage from "./Pages/SingleBlogPage.js";
import EditBlogDetails from "./Pages/EditBlogDetails.js";
import MainBlog from "./components/MainBlog.js";
const App = () => {
  const [open, setOpen] = useState(false);
  const { state } = useContext(AuthContext);

  // {state.isLoggedIn?(<Routes><Route index element={<Dashboard/>}/>):(<Route index element={<Login/>}/></Routes>)}

  if (!state.isLoggedIn)
    return (
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="blogs/:id" element={<SingleCard />} />
        <Route path="/categories/:id" element={<CategoryPage />} />
      </Routes>
    );
  else
    return (
      <div>
        <SideBar>
          <Routes>
            {/* <Route index element={<HomePage/>}/> */}

            <Route path="/login" element={<Dashboard />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/myblogs" element={<MyBlogs />} />
            <Route path="/myblogs/blogs/:id" element={<MainBlog />} />
            <Route path="/TextEditor" element={<TextEditor />} />
            <Route path="/logout" element={<Login />} />
            <Route path="/editformdetails" element={<EditBlogDetails />} />
            {/* <Route path='/Home' element={<Dashboard/>}/> */}
          </Routes>
        </SideBar>
        <Routes></Routes>
      </div>
    );
};

export default App;
