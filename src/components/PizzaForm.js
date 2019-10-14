import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={props.topping} onChange={(event) => props.changeHandler(event)}  />
        </div>
        <div className="col">
          <select name="size" value={props.size} className="form-control" onChange={(event) => props.changeHandler(event)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" onChange={(event) => props.radioChangeHandler(event)} checked={props.vegetarian === true ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Not Vegetarian" onChange={(event) => props.radioChangeHandler(event)} checked={props.vegetarian === false ? true : false} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(event) => props.submitHandler(event)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
