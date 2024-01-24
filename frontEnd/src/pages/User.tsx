import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "../components/Blog";

const User = () => {
  const [blog, setBlog] = useState([
    {
      title: String,
      content: String,
      email: String,
    },
  ]);

  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
  });

  const onsubmit = async (e: any) => {
    const { title, content } = newBlog;
    e.preventDefault();
    await axios.post(
      "/api/blog/",
      { title: title, content: content },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user"),
        },
      }
    );
  };
  useEffect(() => {
    const fetchBlog = async () => {
      await axios
        .get("/api/blog/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("user"),
          },
        })
        .then((response) => {
          setBlog(response.data);
        });
    };
    fetchBlog();
  }, []);

  const onchange = (e: any) => {
    setNewBlog((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  return (
    <>
      <div className="container ">
        <h4 className="text-center">My Blogs</h4>

        <div className="d-grid">
          {blog.map((val: any) => (
            <Blog
              title={val.title}
              content={val.content}
              email={val.email}
              key={val.title}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <h4 className="text-center mt-5">Create new Blog</h4>
        <form onSubmit={onsubmit} className="mt-5">
          <div>
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              id="title"
              type="text"
              className="form-control"
              onChange={onchange}
            />
          </div>
          <div>
            <label htmlFor="content" className="form-label">
              Content:
            </label>
            <input
              id="content"
              type="text"
              className="form-control"
              onChange={onchange}
            />
          </div>
          <div className="container w-25 mt-4">
            <button className="btn btn-success w-100">Publish Blog</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default User;
