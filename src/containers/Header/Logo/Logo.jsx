import React from "react";
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="img/logo.png" alt={'img'}></img>
    </div>
  );
};

export default Logo;
