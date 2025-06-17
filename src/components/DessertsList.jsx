import React from 'react';
import PropTypes from 'prop-types';

function DessertsList(props) {
  // 1. Get the data prop
  const { data } = props;

  // 2. Filter and sort the desserts
  const lowCalorieDesserts = data
    .filter(dessert => dessert.calories <= 500)
    .sort((a, b) => a.calories - b.calories);

  //3. Map to <li> elements
  const dessertItems = lowCalorieDesserts.map(dessert => (
    <li key={dessert.name}>
      {dessert.name} - {dessert.calories} cal
    </li>
  ));

  //4. Render inside a <ul>
  return <ul>{dessertItems}</ul>;
}

DessertsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DessertsList;
