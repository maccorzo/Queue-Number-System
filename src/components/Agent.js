import React from 'react';

class Agent extends React.Component {

  render() {
    return (
      <form className="agent">
        <div>Next </div>
        <div className="agent__input" id="next">042</div>
        <div>Queue</div><div>{Object.keys(this.props.queue).length}</div>
        <button className="agent__button" type="submit">Take the next customer</button>
      </form >
    )
  }
}

export default Agent 