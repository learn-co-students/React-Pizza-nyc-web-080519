import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import { runInThisContext } from 'vm';

const API = "http://localhost:3000/pizzas"

class App extends Component {

  state = {
    pizzas: [], 
    id: 0,
    topping: '',
    size: '',
    vegetarian: false
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({pizzas: data}))
  } 


  editForm = (pizzaObj) => {
    this.setState({
      id: pizzaObj.id,
      topping: pizzaObj.topping,
      size: pizzaObj.size,
      vegetarian: pizzaObj.vegetarian
    })
  }

  changeHandler = (e) => {

    if(e.target.name === "vegetarian"){
      this.setState({vegetarian: true})
    } else if (e.target.name === "not-vegetarian"){
      this.setState({vegetarian: false})
    } else {
      this.setState({[e.target.name]: e.target.value})
    }
  }

  handleSubmit = () => {
    const options = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })
    }

    fetch(API + `/${this.state.id}`, options)
      .then(resp => resp.json())
      .then(pizza => this.updatePizza(pizza))
  }

  updatePizza = (pizza) => {
    //go through all the pizzas, find the matching pizza, and replace the matching one in the pizzas array 
    let copyPizzaArr = [...this.state.pizzas]
    let foundIndex = copyPizzaArr.findIndex(x => x.id == pizza.id)
    copyPizzaArr[foundIndex] = pizza
    
    this.setState({pizzas: copyPizzaArr})
  }



  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          handleSubmit={this.handleSubmit}
          changeHandler={this.changeHandler}
          topping={this.state.topping}
          vegetarian={this.state.vegetarian}
          size={this.state.size}
        />
        <PizzaList pizzas={this.state.pizzas} editForm={this.editForm}/>
      </Fragment>
    );
  }
}

export default App;
