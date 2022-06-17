import React from "react";
import styles from "../assests/css/blogDetail.module.css";
import { useParams } from "react-router-dom";
import allBlogs from "../seeds/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const filteredBlog = allBlogs.filter((blog) => blog.id === parseInt(id));
  // console.log(filteredBlog);
  return (
    <div className={styles["blogCard__container"]}>
      <div className={styles["blogCard-img"]}>
        <img src={filteredBlog[0].image} alt={filteredBlog[0].title} />
      </div>
      <div className={styles["blogCard-title"]}>
        <h1>{filteredBlog[0].title}</h1>
      </div>
      <div className={styles["blogCard-category"]}>
        <span>{filteredBlog[0].category}</span>
      </div>
      <div className={styles["blogCard-description"]}>
        <p>{filteredBlog[0].description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
