import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzas: [],
      editPizza: {topping: "", size:"", vegetarian:""}
      }
    }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(response => response.json())
    .then(data => this.setState({
      pizzas: data
    }))
  }

  updateForm = (event) => {
    // console.log(event.target.value)
    this.setState({
      editPizza: event.target.value
    })
  }

  editFormPizza = (pizza) => {
    this.setState({
      editPizza: pizza
    })
  }

  createPizza = (pizza) => {
    // console.log(pizza)
    fetch("http://localhost:3000/pizzas", {
      method: "POST", 
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body:JSON.stringify(
        pizza
      )
      })
    .then(response => response.json())
    .then(pizza => {
      let newArray = [...this.state.pizzas, pizza]
      this.setState({
      pizzas: newArray
    })
    })
  }

  populateForm = (foundPizza) => {
    // console.log(foundPizza)
    let pizzaToEdit = [...this.state.editPizza, foundPizza]
    this.setState({
      editPizza: pizzaToEdit
    })
  }

  render() {
    // console.log("state: ", this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm createPizza={this.createPizza} editPizza ={this.state.editPizza} updateForm={this.updateForm} />
        <PizzaList key={this.state} pizzas={this.state.pizzas} populateForm={this.populateForm} editFormPizza= {this.editFormPizza} />
      </Fragment>
    );
  }
}

export default App;
