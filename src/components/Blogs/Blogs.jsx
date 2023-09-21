import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmark, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="pb-20">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmark={handleBookmark}
          handleReadingTime={handleReadingTime}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func,
  handleReadingTime: PropTypes.func
};

export default Blogs;
