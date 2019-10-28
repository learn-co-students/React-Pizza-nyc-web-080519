import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    pizzas: [],
    editPizza:{
      topping : "",
      size : "",
      vegetarian: true
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(response => response.json())
    .then(pizzas => this.setState({
      pizzas: pizzas
    }))
  }

  clickHandler = (id) => {
    console.log(id)
    let foundPizza = this.state.pizzas.find(pizza => pizza.id === id)
    this.setState({
      editPizza: foundPizza
    })
  }

  changeHandler=(event)=>{
    this.setState({
      editPizza: 
        {...this.state.editPizza, [event.target.name]: event.target.value}
    })
  }

  checkBoxHandler = (event) => {
    let value = false
    if (event.target.value === "Vegetarian") {
      value = true
    }
    this.setState({
      editPizza: {...this.state.editPizza, [event.target.name]: value}
    })
  }

  submitHandler = (pizza) => {
    console.log(this.state)
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian
      })
    })
    .then(response => response.json())
    .then(pizza => {
      console.log(this.state)
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
    console.log(this.state.pizzas)
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.state.editPizza} submitHandler={this.submitHandler} changeHandler={this.changeHandler} checkBoxHandler={this.checkBoxHandler}/>
        <PizzaList pizzas = {this.state.pizzas} clickHandler={this.clickHandler}/>
      </Fragment>
    );
  }
}

export default App;
