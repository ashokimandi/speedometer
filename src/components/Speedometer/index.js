// Write your code here
import { Component } from "react"

import "./index.css"

class Speedometer extends Component {
  state = { speed: 0 }

  onIncrement = () =>  this.setState((prevState) => {
    return (
    if (prevState.speed < 200){
       { speed: prevState.speed + 10 }
    }else if (prevState.speed === 0) {
        {speed: prevState.speed}
    }
    )
})
  
  onDecrement = () => { this.setState((prevState) => 
    if (prevState.speed > 0){
        return { speed: prevState.speed - 10 }
    }else if (prevState.speed === 0) {
        return {speed: prevState.speed}
    }
    
  )};
    
  render() {
    const { speed } = this.state
    return (
      <div className="container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img className="image" src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer"/>
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="paragraph"> Minimum Limit is 0mph, Maximum Limit is 200mph </p>
        <button className="button" onClick={this.onIncrement}>
          Accelerate
        </button>
        <button className="button" onClick={this.onDecrement}>
          Apply Brake
        </button>
      </div>
    )
  }
}

export default Speedometer