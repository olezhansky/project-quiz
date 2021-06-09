import React from "react";
import Logo from "./Logo/Logo";
import styles from "./Header.module.css";



const Header = () => {
  return (
    <>
      <Logo />
      <div className={styles.Header}>
        <div className="container">
          <div className={styles.headerWrapper}>
            <div className={styles.headerTitle}>
              <h1> Welcome to IT-quize</h1>
            </div>
          </div>
          <div className={styles.menu}>
            <ul className={styles.menuUl}>
              <li className={styles.menuItem}>Home</li>
              <li className={styles.menuItem}>Quize</li>
              <li className={styles.menuItem}>Statistic</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
