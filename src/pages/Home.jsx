import React from "react";
import BlogList from "../components/BlogList";
import Categories from "../components/Categories";
import styles from "../assests/css/home.module.css";

const Home = () => {
  return (
    <div className={styles["home__container"]}>
      <BlogList />
      <Categories />
    </div>
  );
};

export default Home;
