import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header-Content.module.scss";

const HeaderContent = () => {
  return (
    <div className={styles["headerContent"]}>
      <h1 className={styles["header__heading"]}>
        empowering future leaders, <br />
        <span className='callback'>one step at a time.</span>
      </h1>

      <Link
        to='/opportunities'
        className={styles["header__button"]}
      >
        view opportunities :)
      </Link>
    </div>
  );
};
export default HeaderContent;
