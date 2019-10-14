import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" 
            value={ props.objInForm.size ? props.objInForm.topping : ""}
            onChange={props.objInForm.size ? (event) => props.editInForm("topping", props.objInForm, event) : null}/>
        </div>
        <div className="col">
          <select value={props.objInForm.size ? props.objInForm.size : "" } onChange={props.objInForm.size ? (event) => props.editInForm("size", props.objInForm, event) :  null} className="form-control">
            <option value=""></option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" onChange={props.objInForm.size ? (event) => props.editInForm("veg", props.objInForm, event) : null}>
          <div className="form-check">
            <input className="form-check-input" type="radio" value={"Vegetarian"}
            // onChange={(event) => props.editInForm("veg", props.objInForm, event)}
            checked={props.objInForm.vegetarian ? true : false }/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value={"Not Vegetarian"} 
            // onChange={(event) => props.editInForm("veg", props.objInForm, event)}
            checked={props.objInForm.size ? props.objInForm.vegetarian ? false : true : null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.objInForm.size ? props.submitForm : null }>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
