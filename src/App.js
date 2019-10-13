import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const API = "http://localhost:3000/pizzas"

class App extends Component {

  state = {
    pizzas: [],
    changePizza: [],
    topping: "",
    size: "",
    vegetarian: true
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({pizzas: data}))
  }

  editClickHandler = (pizza) => {
    let found = this.state.pizzas.find(pizzaObj => pizzaObj === pizza)
    let changePizza = [...this.state.changePizza]
    changePizza = [found]
    this.setState({
      changePizza,
      topping: found.topping,
      size: found.size,
      vegetarian: found.vegetarian
    })
  }

  changeHandler = e => {
    if (e.target.name === "vegetarian") {
      this.setState({
        vegetarian: ((e.target.value === "Vegetarian") ? true : false)
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  submitHandler = e => {
    e.preventDefault()
    // let found = this.state.pizzas.find(pizzaObj => pizzaObj === this.state.changePizza)
    let found = this.state.pizzas.find(pizzaObj => pizzaObj === this.state.changePizza[0])
    if(found){
      let pizzaIdx = this.state.pizzas.indexOf(found)
      found = {id: found.id, topping: this.state.topping, size: this.state.size, vegetarian: this.state.vegetarian}
      let pizzas = [...this.state.pizzas]
      pizzas[pizzaIdx] = found
      this.setState({
        pizzas
      })
    }
  }

  // pizzaForm = (e, pizza) => {
  //   e.preventDefault()
  //   let found = this.state.pizzas.find(pizzaObj => pizzaObj === pizza)
  //   if(found) {
  //     let pizzaIdx = this.state.pizzas.indexOf(found)
  //     let pizzas = [...this.state.pizzas]
  //     pizzas[pizzaIdx] = found
  //     this.setState({
  //       pizzas
  //     })
  //   }
  // }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} changeHandler={this.changeHandler} submit={this.submitHandler}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editClickHandler}/>
      </Fragment>
    );
  }
}

export default App;
