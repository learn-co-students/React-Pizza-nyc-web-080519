import React from 'react';
// import React, { Component } from 'react';
import Pizza from '../components/Pizza'


const PizzaList = (props) => {

  // console.log("props ", props)

  let pizzaArray = props.pizzas.map(pizzaObj => <Pizza key={pizzaObj.id} pizza={pizzaObj} handleEditButton={props.handleEditButton}/>)
 
 
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
          pizzaArray
        }
      </tbody>
    </table>
  );

}

export default PizzaList;
