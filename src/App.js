import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    topping: "",
    size: "Small",
    vegetarian: "",
    currentId: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(response => response.json())
    .then(data => {
      const newArr = [...this.state.pizzas, data]
      this.setState({pizzas: newArr[0]})
    })
  }

  editPizza = (id) => {
    const foundPizza = this.state.pizzas.find((pizza) => {
      return pizza.id === id
    })
    let newObj = {...this.state}
    newObj.currentId = id
    newObj.topping = foundPizza.topping
    newObj.size = foundPizza.size
    newObj.vegetarian = foundPizza.vegetarian
    if (foundPizza.vegetarian === true) {
      newObj.notVegetarian = false
      newObj.vegetarian = true
    }
   else {
      newObj.notVegetarian = true
      newObj.vegetarian = false
    }
    this.setState(newObj)
  } 

  changeHandler = (e) => {
    const newObj = {...this.state}
    newObj[e.target.name] = e.target.value
    this.setState(newObj)
  }

  radioChangeHandler = (e) => {
    if (e.target.value === "Vegetarian") {
      this.setState({vegetarian: true})
    }
    else {
      this.setState({vegetarian: false})
    }
  }

  submitHandler = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.currentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })
    })
    .then(response => response.json())
    .then(data => {
      const pizzas = [...this.state.pizzas]
      const foundPizzaId = this.state.pizzas.findIndex((pizza) => {
        return pizza.id === data.id
      })
      pizzas[foundPizzaId].topping = data.topping
      pizzas[foundPizzaId].size = data.size
      pizzas[foundPizzaId].vegetarian = data.vegetarian
      this.setState({pizzas: pizzas})
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm id={this.state.currentId} submitHandler={this.submitHandler} topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} notVegetarian={this.state.notVegetarian} changeHandler={this.changeHandler} radioChangeHandler={this.radioChangeHandler}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
