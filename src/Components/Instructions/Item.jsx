import React from "react";
import PropTypes from "prop-types";
import "./styles.css";


const Item = ({ title, text, marker }) => {

  return (
    <li className="instructions__list">
      <span className="marker">{marker}</span>
      <div>
        <span className="instructions_bold">{title} </span>
        <span className="instructions">{text}</span>
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
