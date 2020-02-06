import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Create New or Edit existing" 
            value={ props.objInForm.topping }
            onChange={(event) => props.editInForm("topping", props.objInForm, event)}/>
        </div>
        <div className="col">
          <select value={ props.objInForm.size } onChange={(event) => props.editInForm("size", props.objInForm, event)} className="form-control">
            <option value=""></option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" >
          <div className="form-check">
            <input className="form-check-input" type="radio" value={"Vegetarian"}
            onChange={(event) => props.editInForm("veg", props.objInForm, event)}
            checked={props.objInForm.vegetarian ? true : false }/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value={"Not Vegetarian"} 
            onChange={(event) => props.editInForm("veg", props.objInForm, event)}
            checked={props.objInForm.size ? props.objInForm.vegetarian ? false : true : false }/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          {props.objInForm.id ? 
            <button type="submit" className="btn btn-success" onClick={props.submitEditForm}>Edit item</button>
          :
          <button type="submit" className="btn btn-success" onClick={props.submitCreateItemForm}>Create New Item</button>
           }


          
        </div>
       </div>

  )
}

export default PizzaForm
