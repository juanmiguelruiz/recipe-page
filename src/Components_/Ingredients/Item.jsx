import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Item = ({ text }) => {
  return (
    <li>
     <label>
       <input className="recipe__checkbox filled-in" type="checkbox" />
       <span className="recipe__checkbox__text">{text}</span>
     </label>
   </li>
  );
};

Item.propTypes = {
  text: PropTypes.string,
};
Item.defaultProps = {
  text: "",
};

export default Item;
