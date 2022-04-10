import React from "react";
import "../components/Button.css";

const Button = ({ text, align, onClick, className }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{ alignSelf: align }}
      type="button"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  align: "flex-start",
  text: "Click",
  className: "btn btn--third-color",
};

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
//   align: PropTypes.string,
// onClick: PropTypes.func.isRequired
// }

export default Button;
