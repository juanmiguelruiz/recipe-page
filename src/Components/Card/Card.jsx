import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faClock } from "@fortawesome/free-solid-svg-icons";

const Card = ({
  title,
  image,
  description,
  yields,
  prep_time,
  cook_time,
  total_time,
}) => {
  return (
    <div className="row">
      <div className="col s12">
        <p className="title__recipe">{title}</p>
      </div>
      <div className="col s1">
        <i className="material-icons grain">grain </i>
      </div>
      <div className="col s11">
        <p className="description__recipe">{description}</p>
      </div>
      <img src={image} alt="" className="image__recipe" />
      <div className="yields-grid">
        <div className="col s1 yields">
          <FontAwesomeIcon className="yields" icon={faUtensils} />
        </div>
        <div className="col s11 yields__servings">
          <p className="yields__recipe">
            <span>YIELDS</span>
            <br />
            {yields}
          </p>
        </div>
      </div>
      <div className="info-grid">
        <div className="col s1 info">
          <FontAwesomeIcon className="info" icon={faClock} />
        </div>
        <div className="col s3 info__serving">
          <p className="info__recipe">
            <span>PREP TIME</span>
            <br />
            {prep_time}
          </p>
        </div>
        <div className="col s1 info">
          <FontAwesomeIcon className="infos" icon={faClock} />
        </div>
        <div className="col s3 info__serving">
          <p className="info__recipe">
            <span>COOK TIME</span>
            <br />
            {cook_time}
          </p>
        </div>
        <div className="col s1 info">
          <FontAwesomeIcon className="infos" icon={faClock} />
        </div>
        <div className="col s3 info__serving">
          <p className="info__recipe">
            <span>TOTAL TIME</span>
            <br />
            {total_time}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  yields: PropTypes.string,
  prep_time: PropTypes.string,
  cook_time: PropTypes.string,
  total_time: PropTypes.string,
};

export default Card;
