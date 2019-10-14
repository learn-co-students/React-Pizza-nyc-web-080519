import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    allPizzas: [],
    objInForm: {},
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
      newObj.vegetarian = !newObj.vegetarian
      this.setState({
        objInForm: {...newObj} 
      })
    }
    
  }

  clearForm = () => {
    this.setState({
      objInForm: {}
    })
  }
  
  submitForm = () => {
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
      .then( this.clearForm() )
      

  }
  
  render() {
    console.log("RENDER vegetarian newobj: ", this.state.objInForm )
    return (
      <Fragment>
        <Header/>
        <PizzaForm  objInForm={this.state.objInForm} editInForm={this.editInForm} submitForm={this.submitForm}/>
        <PizzaList allPizzas={this.state.allPizzas} sendToPizzaForm={this.sendToPizzaForm}  />
      </Fragment>
    );
  }
}

export default App;
