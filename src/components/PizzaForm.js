import React from "react"

class PizzaForm extends React.Component {

  getEditPizzaTopping = () => {
    if (this.props.editPizza.length > 0) {
      return this.props.editPizza[0].topping
    }
  }
  

  submitHandler = (e) => {
    e.preventDefault()
    this.props.createPizza(this.state)
    this.setState({
      toppings: "",
      size: "", 
      vegetarian:null
    })
  }

  render (props) {
    return(
        <div className="form-row">
          <div className="col-5">
          {this.props.editPizza ? <input type="text" placeholder="Please give a topping to your Pie" onChange={this.props.updateForm} className="form-control" value={this.props.editPizza.topping} /> : <input type="text" onChange={this.updateTopping} className="form-control" placeholder={this.state.topping} value={this.state.topping} /> } 
          </div>
          <div className="col">
          <select value={this.props.editPizza.size} onChange={this.props.updateForm} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" onChange = {this.props.updateForm} checked={this.props.editPizza.vegetarian}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={this.props.updateForm} checked={!!this.props.editPizza.vegetarian}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.submitHandler}>Submit</button>
          </div>
        </div>
  
    )
  }

}


export default PizzaForm
