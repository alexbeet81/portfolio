import React from "react";

const Button = ({ href, className, children }) => {
  return (
    <a href={href}>
      <button type="button" className={className}>
        {children}
      </button>
    </a>
  );
};

export default Button;
