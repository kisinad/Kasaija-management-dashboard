// 'use strict';
// import React from "react";
// import ReactDOM from "react-dom";

// const e = React.createElement;
class DashBoard extends React.Component {
  
  render() {
    return(
      <div>
        <div>Header</div>
        <div>Days</div>
        <div>Cells</div>
      </div>
      )

  }
}

ReactDOM.render(<DashBoard />, document.getElementById('test'));