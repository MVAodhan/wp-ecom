import React from "react";

import styles from "./Container.module.scss";

const Container = ({ children, className, ...rest }) => {
  let containerClassName = styles.container; // Default from Container.module.scss

  if (className) {
    containerClassName = `${containerClassName} ${className}`;
  } // If className prop exists
  // containerClassName = containerClassName above & className from prop to create combo class
  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  );
};

export default Container;
