import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
// import { throws } from 'assert';


//should we have passed onChange values up to editPizza and set state here in App vs keeping state on PizzaForm and then only passing it upon submit???
class App extends Component {
  state = {
    pizzas: [],
    editPizza: ""
  }

  componentDidMount() {
    this.fetchPizzas()
  }

  fetchPizzas = () => {
    fetch("http://localhost:6969/pizzas")
    .then(resp => resp.json())
    .then(pizzas => {
      this.setState({pizzas: pizzas})
    })
  }

  fetchPatchPizza = (editedPizzaObj) => {
    let id = editedPizzaObj.id
    fetch(`http://localhost:6969/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(editedPizzaObj)
    })
  }

  handleEditButton = (pizzaObj) => {
    this.setState({editPizza: pizzaObj})
  }

  handleSubmit = (editedPizzaObj) => {
    let pizzaCopy = [...this.state.pizzas]
    let foundPizza = pizzaCopy.find(pizza => pizza.id === editedPizzaObj.id)
    foundPizza.topping = editedPizzaObj.topping
    foundPizza.size = editedPizzaObj.size
    foundPizza.vegetarian = editedPizzaObj.vegetarian
    //optimistically setting state before patch
    this.setState({pizzas: pizzaCopy})
    this.fetchPatchPizza(editedPizzaObj)
  }

  render() {
    console.log("state =", this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.editPizza} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} handleEditButton={this.handleEditButton}/>
      </Fragment>
    );
  }
}

export default App;
