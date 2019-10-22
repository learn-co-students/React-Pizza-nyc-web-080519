import React from "react"

class PizzaFormCopy extends React.Component {
  // adding state in this component to handle the onChange from the form inputs so that the entire app doesn't re-render by having the onChange setState in App
  // upon submit, will pass these state values up to app to set the state of the object and then send the patch request

  // ????????? ask Tashawn about deriving state from props in this case since it's an edit form

  state= {
    topping: null,
    size: "",
    vegetarian: null
  }

  //on page load, Not Vegetarian checked should be true (checked), vegetarian should be false (unchecked)
  //once prop is passed in, it needs to be checked according to prop
  //if this.state.vegetarian is different than this.props.pizza.vegetarian, it should toggle

  //also the submit button is a simple button and not a submit input on a form, so we won't be able to send the event to app and will have to pass all the arguments

  isVegetarian = () => {
    if (!this.props.pizza) {
      return false
    } else if (this.props.pizza && this.state.vegetarian === null) {
      return this.props.pizza.vegetarian
    } else {
      return this.state.vegetarian
    }
  }

  handleSubmitClick = () => {
    let id = this.props.pizza.id;
    let topping;
    let size;
    let vegetarian;
    this.state.topping ? topping = this.state.topping : topping = this.props.pizza.topping;
    this.state.size ? size = this.state.size : size = this.props.pizza.size;
    this.state.vegetarian !== null ? vegetarian = this.state.vegetarian : vegetarian = this.props.pizza.vegatarian;
    
    let editedPizzaObj = {
      id: id,
      topping: topping,
      size: size,
      vegetarian: vegetarian
    }

    this.props.handleSubmit(editedPizzaObj)
    this.setState({
      topping: null,
      size: "",
      vegetarian: null
    })

  }

  handleChange = (e) => {
    let toppingCopy = this.state.topping
    let sizeCopy = this.state.size
    let vegCopy = this.state.vegetarian
  
    if (e.target.name === "topping") {
      toppingCopy = e.target.value 
      this.setState({topping: toppingCopy})
    } else if (e.target.name === "size") {
      sizeCopy = e.target.value
      this.setState({size: sizeCopy})
    } else if (e.target.value === "Vegetarian") {
      vegCopy = true
      this.setState({vegetarian: vegCopy})
    } else if (e.target.value === "Not Vegetarian") {
      vegCopy = false
      this.setState({vegetarian: vegCopy})
    }
    
  }

  // ?????????????????? Ask Tashawn about not being able to totally backspace through the topping value bc of the ternary setting the value

  render() {
    console.log("form state =", this.state)
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" onChange={this.handleChange} value={
                this.state.topping !== null ? this.state.topping : this.props.pizza.topping
              }/>
        </div>
        <div className="col">
          <select value={this.state.size ? this.state.size : this.props.pizza.size} className="form-control" name="size" onChange={this.handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" name="vegetarian" checked={this.isVegetarian()} onChange={this.handleChange} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" name="vegetarian" checked={!this.isVegetarian()} onChange={this.handleChange} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.handleSubmitClick}>Submit</button>
        </div>
      </div>

    )
  }
}

export default PizzaFormCopy
