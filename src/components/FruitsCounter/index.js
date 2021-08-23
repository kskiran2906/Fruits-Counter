import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes{' '}
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.onIncrementMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.onIncrementBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
