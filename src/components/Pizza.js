import React from "react"

const Pizza = (props) => {

  const clickHandler = () => {
    props.editForm(props.pizza)
  }

  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian.toString()}</td>
      <td><button type="button" className="btn btn-primary" value={props.id} onClick={clickHandler}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
