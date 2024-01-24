import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "../components/Blog";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: String,
      content: String,
      email: String,
    },
  ]);

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get("/api/blog/").then((response) => {
        setBlogs(response.data);
      });
    };
    dataFetch();
  }, []);
  return (
    <div>
      <h4 className="text-center">All Blogs</h4>
      <div className="d-grid">
        {blogs.map((val: any) => (
          <Blog
            title={val.title}
            content={val.content}
            email={val.email}
            key={val.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
