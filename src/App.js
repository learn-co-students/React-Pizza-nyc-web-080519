import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    allPizzas: [],
    objInForm: {id: "", topping: "", size: "", vegetarian: null },
  }

  componentDidMount() {
    this.fetchAllPizzas()
  }

  fetchAllPizzas = () => {
    fetch(" http://localhost:3000/pizzas/")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allPizzas: data
      })
    })
  }

  sendToPizzaForm = (obj) => {
    this.setState({
      objInForm: obj
    })
  }
  
  editInForm = (type, obj, event) => {
    if (type === "size") {
      console.log("type - obj - event.target.value       ", type, obj, event.target.value)
      let newObj = {...this.state.objInForm}
      newObj.size = event.target.value
      this.setState({
        objInForm: newObj
      })
    } else if ( type === "topping" ){
      let newObj = {...this.state.objInForm}
      newObj.topping = event.target.value
      this.setState({
        objInForm: newObj
      })
    } else if ( type === "veg") {
      let newObj = {...this.state.objInForm}
      newObj.vegetarian = (newObj.vegetarian) ? false : true 
      this.setState({
        objInForm: {...newObj} 
      })
    }
    
  }

  clearForm = () => {
    let newObj = {id: "", topping: "", size: "", vegetarian: null }
    this.setState({
      objInForm: newObj
    })
  }
  
  submitEditForm = () => {
    let newAllPizzasArr = [...this.state.allPizzas]
    let objToChange = newAllPizzasArr.find(pizza => { return pizza.id === this.state.objInForm.id})
    // debugger
    console.log("objToChange: ", objToChange)
    // console.log("this.state.objInForm: ", this.state.objInForm)
    objToChange.size = this.state.objInForm.size
    objToChange.topping = this.state.objInForm.topping
    objToChange.vegetarian = this.state.objInForm.vegetarian
    console.log("objToChange after resetting: ", newAllPizzasArr)

    this.setState({
      allPizzas: newAllPizzasArr
    })
    fetch(" http://localhost:3000/pizzas/" + objToChange.id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(
        objToChange
        )
      })
      .then( this.clearForm())
  }

  submitCreateItemForm= () => {
    fetch(" http://localhost:3000/pizzas/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(
        this.state.objInForm
        )
      })
      .then(resp => resp.json())
      .then( data => {
        let newAllPizzasArr = [...this.state.allPizzas, data]
        this.setState({
          allPizzas: newAllPizzasArr
        })
      })
      .then( this.clearForm())
  }

  deletePizza = (obj) => {
    let newArr = this.state.allPizzas.filter(pizza => pizza.id !== obj.id)
    console.log("new arr same as statearr?", newArr === this.state.allPizzas)
    this.setState({
      allPizzas: newArr
    })
    fetch(" http://localhost:3000/pizzas/" + obj.id, {
      method: "DELETE"})  
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm  objInForm={this.state.objInForm} editInForm={this.editInForm} submitEditForm={this.submitEditForm} submitCreateItemForm={this.submitCreateItemForm} />
        <PizzaList allPizzas={this.state.allPizzas} sendToPizzaForm={this.sendToPizzaForm}  deletePizza={this.deletePizza} />
      </Fragment>
    );
  }
}

export default App;
