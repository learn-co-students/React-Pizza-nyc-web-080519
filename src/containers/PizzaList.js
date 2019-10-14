import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
  let pizza = this.props.allPizzas.map(pizza => {return <Pizza key={pizza.id} pizza={pizza} sendToPizzaForm={this.props.sendToPizzaForm} />})
    
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
          { pizza }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
