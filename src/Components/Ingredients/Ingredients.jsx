import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import Item from "./Item";

const Ingredients = ({ first_title, second_title }) => {
  return (
    <div className="ingredients">
      <div className="col s12 l8">
        <p className="title__ingredients">Ingredients</p>
        <p className="subtitle__ingredients">{first_title}</p>
        <ul>
          <Item text="1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)" />
          <Item text="5 Tablespoons (70g) unsalted butter, melted" />
          <Item text="1/4 cup (50g) granulated sugar" />
        </ul>

        <p className="subtitle__ingredients">{second_title}</p>
        <ul>
          <Item text="four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature" />
          <Item text="1 cup (200g) granulated sugar" />
          <Item text="1 cup (240g) full-fat sour cream, at room temperature" />
          <Item text="1 teaspoon pure vanilla extract" />
          <Item text="2 teaspoons fresh lemon juice (optional, but recommended)" />
          <Item text="3 large eggs, at room temperature" />
          <Item text="topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) " />
        </ul>
      </div>
    </div>
  );
};

Ingredients.propTypes = {
  first_title: PropTypes.string,
  second_title: PropTypes.string,
};

export default Ingredients;
