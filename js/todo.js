var toda = {
    content: {
        property: [{
            activity: "Visit client 1",
            time: "3:00 PM",
            
        }, {
            activity: "Visit client 2",
            time: "4:00 PM",
        }, {
            activity: "Visit client 3",
            time: "5 :00 PM",
        }, ]
    }
};
class TodoApp extends React.Component {
  render() {
    return (
    
        <h3>Todo List</h3>
       <ul> <li>test</li></ul>
      
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('test1'));

