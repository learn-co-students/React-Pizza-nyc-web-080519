import React from "react"

const Pizza = (props) => {
  const populateForm = () => {
    props.populateForm(props.topping, props.size, props.vegetarian, props.id)
  }

  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Yes" : "No"}</td>
      <td><button onClick={populateForm} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
