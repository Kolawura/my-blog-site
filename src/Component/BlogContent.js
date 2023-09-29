import React, { useEffect, useState } from "react";
import UseFetch from "./useFetch";
import { useNavigate, useParams } from "react-router-dom";

const BlogContent = ({sendBlog}) => {
  const [editBlog, setEditBlog] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, Error, Loading] = UseFetch(`http://localhost:5000/blogs/${id}`);

  const handleDelete = () => {
    const del = window.confirm("Are you sure you want to delete this blog?");
    if (del) {
      fetch(`http://localhost:5000/blogs/${blog.id}`, {
        method: "DELETE",
      }).then(() => navigate("/"));
    }
  };
  const handleEdit = () => {
    setEditBlog((prevEditBlog)=>{
      if (prevEditBlog) {
        const value = {
          title: blog.title,
          body: blog.body,
          author: blog.author,
          id: blog.id
        };
        sendBlog(value)
        navigate('/edit')
      }
      console.log(editBlog);
      return false
    })
    
  };
  useEffect(()=>{

  }, [])
  return (
    <div className="blogBody">
      {Loading && <div className="loading">Loading...</div>}
      {Error && <div className="error">{Error}</div>}
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
      <h4>Written by {blog.author}</h4>
      <button onClick={handleDelete} style={{ backgroundColor: "red" }}>
        Delete
      </button>
      <button onClick={() => navigate(-1)} style={{ backgroundColor: "blue" }}>
        Back
      </button>
      <button onClick={handleEdit} style={{ backgroundColor: "green" }}>
        Edit
      </button>
    </div>
  );
};

export default BlogContent;
