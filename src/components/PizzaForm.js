import React from "react"

const PizzaForm = ({pizzaForm, updatePizza, changeHandler}) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name='topping' placeholder="Pizza Topping" value={pizzaForm.topping} onChange={changeHandler}/>
        </div>
        <div className="col">
          <select className="form-control" name='size' value={pizzaForm.size} onChange={changeHandler} >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name='vegetarian' onChange={changeHandler} checked={pizzaForm.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name='vegetarian' onChange={changeHandler} checked={pizzaForm.vegetarian ? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => updatePizza()} >Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
