import React, { useState } from "react";
import allBlogs from "../seeds/blogs";
import styles from "../assests/css/blogList.module.css";
import { Link } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";

const BlogList = () => {
  const [blogs, setBlogs] = useState(allBlogs);
  return (
    <div className={styles["blogs-container"]}>
      {blogs.map((blog, key) => (
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
          <Link className={styles["blogDetails-link"]} to={`/post/${blog.id}`}>
            Continue Reading..
          </Link>
          <div className={styles["blog-control__container"]}>
            <MdDelete
              onClick={(e) => {
                e.preventDefault();
                setBlogs((items) =>
                  items.filter((item) => blog.id !== item.id)
                );
              }}
              className={styles["blog-control-delete"]}
            />
            <Link to={`/edit/${blog.id}`}>
              <MdModeEdit className={styles["blog-control-edit"]} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
