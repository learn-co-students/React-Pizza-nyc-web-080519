import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      {props.pizza.vegetarian ? <td>Yes</td> : <td>No</td>}
      <td><button type="button" onClick  = {()=> props.clickHandler(props.pizza.id)}className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
