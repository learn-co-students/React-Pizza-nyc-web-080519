import React from "react"

const PizzaForm = props => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input 
            type="text"
            name="topping"
            onChange={props.changeHandler}
            className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                props.topping
              }/>
        </div>
        <div className="col">
          <select 
          value={props.size} 
          name="size"
          onChange={props.changeHandler} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input 
            onChange={props.changeHandler}
            className="form-check-input" type="radio" 
            value="Vegetarian" 
            name="vegetarian"
            checked={props.vegetarian} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check" o>
            <input className="form-check-input" 
            onChange={props.changeHandler}type="radio"
             value="Not Vegetarian" 
              name="not-vegetarian"
             checked={ !props.vegetarian }/>
            <label className="form-check-label">
              Not Vegetarian
            </label> 
          </div>
        </div>
        <div className="col">
          <button 
          type="submit" 
          className="btn btn-success"
          onClick={props.handleSubmit}
          >Submit</button>
        </div>
      </div>
  )
}

export default PizzaForm
