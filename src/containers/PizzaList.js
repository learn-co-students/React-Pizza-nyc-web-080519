import React, { Component } from 'react';
import Pizza from '../components/Pizza'

const PizzaList = props => {

  const renderPizza = () => {
    return props.pizzas.map(pizzaObj => {
      return <Pizza
        key={pizzaObj.id}
        topping={pizzaObj.topping}
        pizza={pizzaObj}
        size={pizzaObj.size}
        vegetarian={pizzaObj.vegetarian}
        editForm={props.editForm}
      />
    })
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
        {
          renderPizza()
          //render Pizza here
        }
      </tbody>
    </table>
  );
}


export default PizzaList;
