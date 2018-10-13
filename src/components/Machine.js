import React from 'react';

class Machine extends React.Component {
  render() {
    return (
      <div className="machine">
        <div>
          <div>Number</div>
          <input class="machine__number" type="text" v-model="number" />
        </div>
        <button className="machine__button">Take a new number</button>
        <div>Queue: </div>
        <div>
          Waiting time:
        </div>
      </div>
    )
  }
}

export default Machine