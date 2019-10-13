import React from 'react';
import Pizza from '../components/Pizza'

const PizzaList = (props) => {
  const makePizzas = () => {
    return props.pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} editClickHandler={props.editClickHandler}/>)
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {makePizzas()}
      </tbody>
    </table>
  );
}

export default PizzaList;
