import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

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
    <div>
     <div className="col s12">
       <p className="recipe__title">{title}</p>
     </div>
     <div className="col s2">
       <i className="material-icons recipe__grain">grain </i>
     </div>
     <div className="col s10">
       <p className="recipe__description">{description}</p>
     </div>
     <img src={image} alt="" className="recipe__image" />

     <div className="col s12 l4 recipe__box right">
       <div class="recipe__info">
         <div>
           <i class="material-icons">restaurant_menu</i>
           <div>
             <span>YIELDS</span>
             <span>12 servings</span>
           </div>
         </div>

         <div>
           <i class="material-icons">schedule</i>
           <div>
             <span>PREP TIME</span>
             <span>45 minutes</span>
           </div>
         </div>

         <div>
           <i class="material-icons">schedule</i>
           <div>
             <span>COOK TIME</span>
             <span>1 hour</span>
           </div>
         </div>

         <div>
           <i class="material-icons">schedule</i>
           <div>
             <span>TOTAL TIME</span>
             <span>7,75 hours</span>
           </div>
         </div>
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
