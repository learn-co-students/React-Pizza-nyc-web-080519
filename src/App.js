import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  constructor() {
    super()
    this.baseUrl = "http://localhost:3001/pizzas"
    this.state = {
      pizzas: [],
      id: '',
      size: '',
      topping: '',
      vegetarian:''
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          size={this.state.size} 
          topping={this.state.topping} 
          vegetarian={this.state.vegetarian} 
          updatePizza={this.updatePizza}
          savePizza={this.savePizza}
        />
        <PizzaList 
          pizzas={this.state.pizzas} 
          populateForm={this.populateForm}
        />
      </Fragment>
    );
  }

  savePizza = () => {
    const body = { 
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian
    }

    fetch(`${this.baseUrl}/${this.state.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(pizza => {
      this.getPizzas()
    })
  }
  
  updatePizza = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  populateForm = (topping, size, vegetarian, id) => {
    this.setState({ topping, size, vegetarian, id })
  }
    
  componentDidMount = () => {
    this.getPizzas()
  }

  getPizzas = () => {
    fetch(this.baseUrl)
    .then(res => res.json())
    .then(pizzas => this.setState({ pizzas }))
  }
}

export default App;
