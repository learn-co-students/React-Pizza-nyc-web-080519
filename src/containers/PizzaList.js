import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  state = {
    admin: false
  }

  setAdmin = () => {
    this.setState({
      admin: !this.state.admin
    })
  }

  render() {
  let pizza = this.props.allPizzas.map(pizza => {return <Pizza key={pizza.id} pizza={pizza} admin={this.state.admin} sendToPizzaForm={this.props.sendToPizzaForm} deletePizza={this.props.deletePizza} />})
    
    return (
      <div >
        <div id="admin" onClick={this.setAdmin}>admin</div>
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
      </div>
    );
  }

}

export default PizzaList;
