import React from "react"

class PizzaForm extends React.Component {
  render() {
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" value={this.props.pizza.topping} onChange={this.props.inputChangeHandler} />
        </div>
        <div className="col">
          <select value={this.props.pizza.size} className="form-control" name="size" onChange={this.props.inputChangeHandler}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" checked={this.props.pizza.vegetarian} onChange={this.props.checkboxChangeHandler}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Not Vegetarian" checked={!this.props.pizza.vegetarian} onChange={this.props.checkboxChangeHandler}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => this.props.submitHandler(this.props.pizza)}>Submit</button>
        </div>
      </div>
  )
  }
}

export default PizzaForm
