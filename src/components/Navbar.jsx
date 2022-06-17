import React, { useState } from "react";
import styles from "../assests/css/navbar.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className={styles["navbar-container"]}>
      <div className={styles["navbar-logo"]}>
        <Link className={styles["navbar-logo-link"]} to="/">
          ByteLearn
        </Link>
      </div>
      <div className={styles["navbar-categories__container"]}>
        <ul className={styles["navbar-categories"]}>
          <li className={styles["navbar-category"]}>
            <Link className={styles["navbar-category-link"]} to="/">
              Home
            </Link>
          </li>
          <li className={styles["navbar-category"]}>
            <Link className={styles["navbar-category-link"]} to="/about">
              About
            </Link>
          </li>
          <li className={styles["navbar-category"]}>
            <Link className={styles["navbar-category-link"]} to="/contact">
              Contact
            </Link>
          </li>
          <li className={styles["navbar-category"]}>
            <Link className={styles["navbar-addpost-link"]} to="/addpost">
              Add Post
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["hamburger-menu"]}>
        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu className={styles["hamburger-menu-icon"]} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
