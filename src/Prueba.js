var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1> {this.props.appName}.</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld appName="A Simple To Do List" />,
  document.getElementById("example")
);

var Todo = React.createClass({
  getInitialState: function() {
    return { editing: false };
  },
  edit: function() {
    // alert("edit todo");
    this.setState({ editing: true });
  },
  remove: function() {
    this.props.onRemove(this.props.index);
  },
  save: function() {
    var val = this.refs.newValue.value;
    // alert('saved item: ' + val);
    console.log(this.props.index);
    this.props.onChange(val, this.props.index);
    this.setState({ editing: false });
  },
  todoDisplay: function() {
    return (
      <li className="todo list-group-item">
        <span onClick={this.edit}>{this.props.children}</span>
        <button onClick={this.remove} />
      </li>
    );
  },
  render: function() {
    if (this.state.editing) {
      return this.todoForm();
    } else {
      return this.todoDisplay();
    }
  }
});

var TodoList = React.createClass({
  getInitialState: function() {
    var items = [];
    return {
      todos: items,
      text: "",
      placeholder: "Add Item",
      input_style: "form-control"
    };
  },
  onChange: function(e) {
    this.setState({ text: e.target.value });
  },
  add: function(e) {
    var arr = this.state.todos;
    var newItem = this.refs.newTodo.value;
    if (!newItem) {
      e.preventDefault();
      this.setState({
        placeholder: "Please enter an item",
        input_style: "form-control red"
      });
    } else {
      arr.push(newItem);
      this.setState({
        todos: arr,
        text: ""
        // placeholder: "Add Item",
        // input_style: "form-control"
      });
    }
  },
  update: function(newValue, i) {
    var arr = this.state.todos;
    arr[i] = newValue;
    this.setState({ todos: arr });
  },
  remove: function(i) {
    var arr = this.state.todos;
    arr.splice(i, 1);
    this.setState({ todos: arr });
  },
  eachTodo: function(todo, i) {
    return (
      <Todo key={i} index={i} onChange={this.update} onRemove={this.remove}>
        {todo}
      </Todo>
    );
  },
  render: function() {
    return (
      <div>
        <h3> Items </h3>
        <div className="form-inline">
          <div className="form-group">
            <input
              ref="newTodo"
              value={this.state.text}
              onChange={this.onChange}
            />
          </div>
        </div>

        <ul>{this.state.todos.map(this.eachTodo)}</ul>
      </div>
    );
  }
});

ReactDOM.render(<TodoList />, document.getElementById("appArea"));
