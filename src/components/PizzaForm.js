import React from "react"

const PizzaForm = (props) => {
  const updatePizza = event => props.updatePizza(event)
  const savePizza = () => props.savePizza()
  
  return(
      <div className="form-row">
        <div className="col-5">
            <input 
              type="text" 
              name="topping"
              className="form-control" 
              placeholder="Pizza Topping" 
              value={props.topping ? props.topping : ''}
              onChange={updatePizza}
            />
        </div>
        <div className="col">
          <select name="size" value={props.size} className="form-control" onChange={updatePizza}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input 
              className="form-check-input" 
              name="vegetarian"
              type="radio" 
              value="Vegetarian" 
              checked={props.vegetarian}
              onChange={updatePizza}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              name="vegetarian"
              type="radio" 
              value="Not Vegetarian" 
              checked={!props.vegetarian}
              onChange={updatePizza}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button 
            type="submit" 
            className="btn btn-success" 
            onClick={savePizza}>
              Submit
          </button>
        </div>
      </div>

  )
}

export default PizzaForm
