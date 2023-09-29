import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditBlog = ({ Blog }) => {
  const [body, setBody] = useState(Blog.body);
  const [author, setAuthor] = useState(Blog.author);
  const [title, setTitle] = useState(Blog.title);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitEditBlog = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const blog = { title, body, author };

    fetch(`http://localhost:5000/blogs/${Blog.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsLoading(false);
      navigate("/");
    });
  };
  return (
    <div className="createBlog">
      <form onSubmit={submitEditBlog}>
        <div className="title">
          <label>Blog Title:</label>
          <input
            type="text"
            value={title}
            autoFocus
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
            placeholder="Title"
          />
        </div>
        <div className="content">
          <label>Blog Body:</label>
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            required
            placeholder="Content"
          />
        </div>
        <div className="author">
          <label>Blog Author:</label>
          <select
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option value="Adekola">Adekola</option>
            <option value="Kolawura">Kolawura</option>
            <option value="David">David</option>
          </select>
        </div>
        {isLoading || (
          <button style={{ backgroundColor: "rgb(0, 0, 236)" }}>
            Edit Blog
          </button>
        )}
        {isLoading && (
          <button style={{ backgroundColor: "rgb(0, 0, 236)" }}>
            Editing Blog
          </button>
        )}
      </form>
    </div>
  );
};

export default EditBlog
