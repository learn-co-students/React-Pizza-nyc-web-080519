import React from "react"

const PizzaForm = (props) => {

  // id: 1
  // renderPizzaOnForm: ƒ(pizzaProps)
  // size: "Small"
  // topping: "Plain"
  // vegetarian: true
  // key: (...)

  console.log()

  return(
      <div className="form-row">
        <div className="col-5">
        <input type="text" className="form-control" onChange={event => props.updateToppings(event.target.value)} placeholder="Pizza Topping" value={
                props.currentPizza.topping
              }/>
        </div>
        <div className="col">
        <select value={props.currentPizza.size} onChange={event => props.updateSize(event.target.value)} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
          <input className="form-check-input" type="radio" value="Vegetarian" onChange={(e) => props.updateVeg(e.target.value)} checked={props.currentPizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
          <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={(e) => props.updateVeg(e.target.value)} checked={!props.currentPizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.updatePizzas}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
