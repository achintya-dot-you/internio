import React from "react";

import styles from "./OpportunitiesForm.module.scss";

const OpportunitiesInput = ({ label, type, value, onChange, required }) => {
  const handleBlur = () => {
    document.documentElement.style.zoom = "1";
  };

  return (
    <>
      {required && (
        <div className={styles["field"] + " " + styles["required"]}>
          <label>{label}</label>
          <input
            autoComplete='off'
            type={type}
            required
            onChange={onChange}
            value={value}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
            onBlur={handleBlur}
          />
        </div>
      )}

      {!required && (
        <div className={styles["field"]}>
          <label>{label}</label>
          <input
            autoComplete='off'
            type={type}
            onChange={onChange}
            value={value}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
            onBlur={handleBlur}
          />
        </div>
      )}
    </>
  );
};

export default OpportunitiesInput;
