import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  
  return (
    <div className="blogLists">
      <h2>All Blog</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="blogList" >
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.body.slice(0,600) + "..."}</p>
            <h4>Written by {blog.author}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList
