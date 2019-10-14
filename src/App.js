import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    currentPizza: {}
        // PIZZA    topping:string  size:string/collection select   veggie:boolean
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(resp => resp.json())
      .then(data => this.setState({
        pizzas: data
      }))
  }

  renderPizzaOnForm=(pizzaProps)=> {
    this.setState({
      currentPizza: pizzaProps
    })
  }

  updatePizzas=()=> {
    let freshPies = this.state.pizzas.map(pie => {
      if (pie.id === this.state.currentPizza.id) {
        return this.state.currentPizza
      } else {
        return pie
      }
    })
    console.log("updating using: ", this.state.currentPizza)
    console.log(this)
    this.setState({ pizzas: freshPies })
    this.updateDB()
  }

  updateDB() {
      fetch(`http://localhost:3000/pizzas/${this.state.currentPizza.id}`, {
        method:"PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(this.state.currentPizza)
      }
    )
  }

  updateToppings = (newTopping) => {
    let newCurrent = Object.assign({}, this.state.currentPizza)
    newCurrent.topping = newTopping
    this.setState({
      currentPizza: newCurrent
    })
  }

  updateSize = (newSize) => {
    let newCurrent = Object.assign({}, this.state.currentPizza)
    newCurrent.size = newSize
    this.setState({
      currentPizza: newCurrent
    })
  }

  updateVeg = (newVeg) => {
    let newCurrent = Object.assign({}, this.state.currentPizza)
    newVeg === "Vegetarian" ? newCurrent.vegetarian = true : newCurrent.vegetarian = false
    this.setState({
      currentPizza: newCurrent
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state.currentPizza} updatePizzas={this.updatePizzas} updateToppings={this.updateToppings} updateSize={this.updateSize} updateVeg={this.updateVeg} />
        <PizzaList renderPizzaOnForm={this.renderPizzaOnForm} pizzas={this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
