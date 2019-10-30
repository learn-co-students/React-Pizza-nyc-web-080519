import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render(props) {
    // console.log("props:", this.props)
    let pizzasArray = this.props.pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} pizzas={this.props.pizzas} populateForm={this.props.populateForm} editFormPizza = {this.props.editFormPizza} />)
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
            {pizzasArray}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
