import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian === true ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => props.editPizza(props.id)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
