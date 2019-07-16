

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
        
        <div className="todoListMain">
        <div className="header">
        <h3>Todo List</h3>
          <form onSubmit={this.addItem}>
            <input placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}
  


ReactDOM.render(<TodoApp />, document.getElementById('test1'));

