import React from "react";
import styles from "../assests/css/categories.module.css";
import { Link } from "react-router-dom";

const categories = [
  {
    category: "category1",
  },
  {
    category: "category2",
  },
  {
    category: "category3",
  },
  {
    category: "category4",
  },
  {
    category: "category5",
  },
];

const Categories = () => {
  return (
    <div className={styles["categories-card__container"]}>
      <ul className={styles["categories-card"]}>
        {categories.map((category, key) => (
          <li key={key} className={styles["category-link"]}>
            <Link to={`/${category.category}`}>{category.category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
