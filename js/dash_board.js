// 'use strict';
// import React from "react";
// import ReactDOM from "react-dom";

// // const e = React.createElement;
// class DashBoard extends React.Component {
  
//   render() {
//     return(
//       <div>
//         <div>Header</div>
//         <div>Days</div>
//         <div>Cells</div>
//       </div>
//       )

//   }
// }

// ReactDOM.render(<DashBoard />, document.getElementById('test'));

//Property JSON Data
var propertydata = {
  content: {
      propety: [
        {
          name: "Apartment Najjjera",
          Price: "300,000",
          id : 1007
        },
        {
          name: "Single BedRoom Kira",
          Price: "350,000",
          id : 1008
        },
        {
          name: "One BedRoom Ntinda",
          Price: "350,000",
          id : 1009
        },
        

      ]
   }
};

//Create class
var Property = React.createClass({
  render: function() {
    //To retrieve keys from data.content
    var keys = Object.keys(propertydata.content);
propertydata
    //iterate through the keys to get the underlying values
    var allEmps = keys.map((t) => propertydata.content[t].map((e) => (<div><a href="tenant_registration.html"><li>{e.id}-{e.name}-{e.Price}</li></a></div>)) );

    return (<div>{allEmps}</div>)
  }
});

//Render data to HTML
ReactDOM.render(<Property/>, document.getElementById("test"));

ReactDOM.render(<Property/>, document.getElementById("test1"));
ReactDOM.render(<Property/>, document.getElementById("test2"));
ReactDOM.render(<Property/>, document.getElementById("test3"));
