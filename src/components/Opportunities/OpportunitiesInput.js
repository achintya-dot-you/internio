import React from "react";

const OpportunitiesInput = ({ label, type, value, onChange, required, styling, textarea }) => {
  return (
    <>
      {!textarea && (
        <>
          {required && (
            <div className={styling["field"] + " " + styling["required"]}>
              <label>{label}</label>
              <input
                autoComplete='off'
                type={type}
                required
                onChange={onChange}
                value={value}
              />
            </div>
          )}

          {!required && (
            <div className={styling["field"]}>
              <label>{label}</label>
              <input
                autoComplete='off'
                type={type}
                onChange={onChange}
                value={value}
              />
            </div>
          )}
        </>
      )}
      {textarea && (
        <>
          {" "}
          {required && (
            <>
              <div className={styling["field"] + " " + styling["required"]}>
                <label>{label}</label>
                <textarea
                  autoComplete='off'
                  required
                  rows='4'
                  onChange={onChange}
                  value={value}
                />
              </div>
            </>
          )}{" "}
          {!required && (
            <>
              <div className={styling["field"]}>
                <label>Additional Remarks</label>
                <textarea
                  autoComplete='off'
                  rows='4'
                  onChange={onChange}
                  value={value}
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default OpportunitiesInput;
