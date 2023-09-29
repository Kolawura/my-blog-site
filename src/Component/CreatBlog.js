import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatBlog = () => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Adekola");
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitBlog = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const blog = { title, body, author };

    fetch("http://localhost:5000/blogs", {
      method: "POST",
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
      <form onSubmit={submitBlog}>
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
            Add Blog
          </button>
        )}
        {isLoading && (
          <button style={{ backgroundColor: "rgb(186, 216, 241)" }}>
            Adding Blog
          </button>
        )}
      </form>
    </div>
  );
};

export default CreatBlog;
