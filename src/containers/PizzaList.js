import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    let pizzaArray = this.props.pizzas.map(pizzaObj => <Pizza key={pizzaObj.id} pizza={pizzaObj} clickHandler={this.props.clickHandler}/>)
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
          {pizzaArray}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
