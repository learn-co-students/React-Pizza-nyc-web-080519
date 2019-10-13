import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  state = {
    pizzas: [],
    pizzaInForm: {
      topping: "",
      size: "",
      vegetarian: true
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(pizzas => this.setState({pizzas: pizzas}))
  }

  editClickHandler = (id) => {
    let foundPizza = this.state.pizzas.find(pizza => pizza.id === id)
    this.setState({
      pizzaInForm: foundPizza
    })
  }

  inputChangeHandler = (e) => {
    this.setState({
      pizzaInForm: {...this.state.pizzaInForm, [e.target.name]: e.target.value}
    })
  }

  checkboxChangeHandler = (e) => {
    let value = false
    if (e.target.value === "Vegetarian") {
      value = true
    }
    this.setState({
      pizzaInForm: {...this.state.pizzaInForm, [e.target.name]: value}
    })
  }

  submitHandler = (pizza) => {
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian
      })
    })
    .then(resp => resp.json())
    .then(pizza => {
      let newPizzas = [...this.state.pizzas]
      let foundPizza = newPizzas.find(newPizza => newPizza.id === pizza.id)
      foundPizza.topping = pizza.topping
      foundPizza.size = pizza.size
      foundPizza.vegetarian = pizza.vegetarian
      this.setState({
        pizzas: newPizzas
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizzaInForm} inputChangeHandler={this.inputChangeHandler} checkboxChangeHandler={this.checkboxChangeHandler} submitHandler={this.submitHandler} />
        {this.state.pizzas.length > 0 ? <PizzaList pizzas={this.state.pizzas} editClickHandler={this.editClickHandler}/> : <h1>Loading</h1>}
      </Fragment>
    );
  }
}

export default App;
