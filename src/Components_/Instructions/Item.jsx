import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Item = ({ title, text, marker }) => {

  return (
    <li className="recipe__instructions__list">
         <span className="recipe__instructions__list__marker">{marker}</span>
         <div>
           <span className="recipe__instructions__list__item--bold">{title} </span>
           <span className="recipe__instructions">{text}</span>
         </div>
       </li>
  );
};

Item.propTypes = {
  title: PropTypes.bool,
  text: PropTypes.string,
  marker: PropTypes.number,
};
Item.defaultProps = {
  title: "",
  text: "",
  marker: 0,
};

export default Item;
