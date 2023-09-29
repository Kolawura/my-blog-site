import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import CreatBlog from "./Component/CreatBlog";
import NotFound from "./Component/NotFound";
import BlogContent from "./Component/BlogContent";
import NavBar from "./Component/NavBar";
import EditBlog from "./Component/EditBlog";
function App() {
  const [blog, setBlog] = useState('')

  const getBlog = (data)=>{
    setBlog(data)
  }
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogContent sendBlog={getBlog} />} />
          <Route path="/create" element={<CreatBlog />} />
          <Route path="/edit" element={<EditBlog Blog={blog} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
