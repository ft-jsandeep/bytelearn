import React from "react";
import styles from "../assests/css/AddPost.module.css";
import allBlogs from "../seeds/blogs";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const filteredPost = allBlogs.filter((blog) => blog.id === parseInt(id));

  const editPostSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(document.getElementById("addPostForm"));

    const formData = {};
    formData.id = filteredPost[0].id;
    for (const [key, value] of data) {
      formData[`${key}`] = value;
    }
    if (
      formData.title !== "" &&
      formData.image !== "" &&
      formData.description !== "" &&
      formData.shortText !== ""
    ) {
      const foundIndex = allBlogs.findIndex((item) => item.id == parseInt(id));
      allBlogs[foundIndex] = formData;
    }
    navigate(`/post/${formData.id}`);
  };
  return (
    <div className={styles["addpost__container"]}>
      <form className={styles["addpost-form"]} action="" id="addPostForm">
        <div className={styles["addPost-inputContainer"]}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={filteredPost[0].title}
            // onChange={() => setTitle(this.value)}
          />
        </div>
        <div className={styles["addPost-inputContainer"]}>
          <label htmlFor="image">Image url:</label>
          {/* <input
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
          /> */}
          <input
            type="text"
            name="image"
            id="image"
            required
            defaultValue={filteredPost[0].image}
          />
        </div>
        <div className={styles["addPost-inputContainer"]}>
          <label htmlFor="shortText">Short text:</label>
          <textarea
            id="shortText"
            rows="5"
            cols="100"
            name="shortText"
            required
            defaultValue={filteredPost[0].shortText}
          ></textarea>
        </div>
        <div className={styles["addPost-inputContainer"]}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            rows="10"
            cols="100"
            name="description"
            required
            defaultValue={filteredPost[0].description}
          ></textarea>
        </div>
        <div className={styles["addPost-inputContainer"]}>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            defaultValue={filteredPost[0].category}
            required
          >
            <option value="nocategory">Choose Category</option>
            <option value="category1">Category1</option>
            <option value="category2">Category2</option>
            <option value="category3">Category3</option>
            <option value="category4">Category4</option>
            <option value="category5">Category5</option>
          </select>
        </div>
        <button
          onClick={editPostSubmitHandler}
          className={styles["addPost-button"]}
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
