import React from "react";

function Button({ color, size, children }) {
  return (
    <div>
      <button className={`btn-${size}`} style={{ backgroundColor: color }}>
        {children}
      </button>
    </div>
  );
}

export default Button;
