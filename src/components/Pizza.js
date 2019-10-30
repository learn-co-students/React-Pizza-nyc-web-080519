import React from "react"

class Pizza extends React.Component {
  // console.log("props:", props)
  constructor(props){
    super(props)
    this.state = {
      topping: "",
      size: "",
      vegetarian: null
    }
  }
  // editHandler= (event) => {
  //   // console.log(event.target.id)
  //   let pizzasArray = this.props.pizzas
  //   let foundPizza = pizzasArray.find(pizza => pizza.id === parseInt(event.target.id))
  //   this.props.populateForm(foundPizza)
  // }

  render(props) {
    // console.log("props:", this.props)
    return(
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        {this.props.pizza.vegetarian ? <td>Yes</td> : <td>No</td>}
        <td><button type="button" id={this.props.pizza.id} onClick= {() => this.props.editFormPizza(this.props.pizza)} className="btn btn-primary">Edit Pizza</button></td>
      </tr> 
    )
  }
}


export default Pizza
