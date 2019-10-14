import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "Yes" : "No"}</td>
      <td><button onClick={() => props.sendToPizzaForm(props.pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
      {props.admin ? <td><button onClick={() => props.deletePizza(props.pizza)} type="button" className="btn btn-primary">Delete Pizza</button></td> : null }

    </tr>
  )
}

export default Pizza
