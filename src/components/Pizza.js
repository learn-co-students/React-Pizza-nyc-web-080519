import React from "react"

const Pizza = (props) => {


  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian}</td>
      <td><button type="button" onClick={ () => props.renderPizzaOnForm(props) } className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
