import React, { useState } from "react";
import allBlogs from "../seeds/blogs";
import styles from "../assests/css/blogList.module.css";
import { Link, useParams } from "react-router-dom";

const CategoryBlogs = () => {
  const { category } = useParams();
  const [blogs, setBlogs] = useState(allBlogs);
  return (
    <div
      className={styles["blogs-container"]}
      style={{ margin: "0 auto", marginTop: "12vh" }}
    >
      {blogs
        .filter((blog) => blog.category === category)
        .map((blog, key) => (
          <div key={key} className={styles["blogCard__container"]}>
            <div className={styles["blogCard-img"]}>
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className={styles["blogCard-title"]}>
              <h1>{blog.title}</h1>
            </div>
            <div className={styles["blogCard-category"]}>
              <span>{blog.category}</span>
            </div>
            <div className={styles["blogCard-shortText"]}>
              <p>{blog.shortText}</p>
            </div>
            <Link
              className={styles["blogDetails-link"]}
              to={`/post/${blog.id}`}
            >
              Continue Reading..
            </Link>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setBlogs((items) =>
                    items.filter((item) => blog.id !== item.id)
                  );
                }}
              >
                Delete
              </button>
              <Link to={`/edit/${blog.id}`}>Edit</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoryBlogs;
