// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumGenrator extends Component {
  state = {count: 0}

  getCount = () => {
    const getRandomNumber = Math.ceil(Math.random() * 100)
    return this.setState(() => ({
      count: getRandomNumber,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="generate-button">
            <button type="button" className="button" onClick={this.getCount}>
              Generate
            </button>
            <p className="generated-num">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumGenrator
