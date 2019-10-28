import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name = "topping" className="form-control" placeholder="Pizza Topping" value={props.editPizza ? props.editPizza.topping : null} onChange={props.changeHandler}/>
        </div>
        <div className="col">
          <select name = "size" onChange={props.changeHandler} value={props.editPizza ? props.editPizza.size : null} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input name="vegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={props.editPizza.vegetarian} onChange={props.checkBoxHandler}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input name="vegetarian" className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.editPizza.vegetarian} onChange={props.checkBoxHandler}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.submitHandler(props.editPizza)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
