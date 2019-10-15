import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const URL = 'http://localhost:3000/pizzas';

class App extends Component {

  state = {
    pizzas : [],
    pizzaForm : {
      topping : '',
      size : ''
    }
  }

  editPizza = (pizzaObj) => {
    let newPizzaForm = {
      ...this.state.pizzaForm,
      topping : pizzaObj.topping,
      size : pizzaObj.size,
      vegetarian : pizzaObj.vegetarian,
      ObjId : pizzaObj.id
    };
    this.setState({ pizzaForm : newPizzaForm});
  }

  changeHandler = (e) => {
    if (e.target.name === 'vegetarian') {
      let newPizzaForm = {
        ...this.state.pizzaForm,
        [e.target.name] : !this.state.pizzaForm.vegetarian
      };
      this.setState({ pizzaForm : newPizzaForm})
    } else {
      let newPizzaForm = {
        ...this.state.pizzaForm,
        [e.target.name] : e.target.value
      };
      this.setState({ pizzaForm : newPizzaForm})
    } 
  }

  updatePizza = () => {
    let postURL = URL + '/' + this.state.pizzaForm.ObjId;
    fetch(postURL, {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json',
        accepts : 'application/json'
      },
      body: JSON.stringify({
        topping : this.state.pizzaForm.topping,
        size : this.state.pizzaForm.size,
        vegetarian : this.state.pizzaForm.vegetarian
      })
    })
    .then(resp => resp.json())
    .then(pizzaApi => {
      let newPizzas = [...this.state.pizzas];
      let foundPizza = newPizzas.find(pizza => pizza.id === pizzaApi.id);
      let index = newPizzas.indexOf(foundPizza);
      newPizzas.splice(index, 1, pizzaApi)
      this.setState({ pizzas : newPizzas})
    })
  }

  componentDidMount(){
    fetch(URL)
    .then(resp => resp.json())
    .then(pizzasApi => this.setState({ pizzas : pizzasApi }))
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaForm={this.state.pizzaForm} updatePizza={this.updatePizza} changeHandler={this.changeHandler}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
