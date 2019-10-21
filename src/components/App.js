import React from "react";
import Header from "./Header";
import Form from "./Form";
import "../stylesheets/App.css";
import Wishlist from "./Wishlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPresent: "",
      presents: []
    };
    this.getQuery = this.getQuery.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.deletePresents = this.deletePresents.bind(this);
  }

  getQuery(event) {
    event.preventDefault();
    this.setState({ newPresent: event.target.value });
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      newPresent: "",
      presents: [
        ...this.state.presents,
        { item: this.state.newPresent, bought: false }
      ]
    });
  }

  deletePresents() {
    this.setState(prevState => {
      let thisPresent = [...prevState.presents];
      thisPresent.splice(0);
      return {
        ...prevState,
        presents: thisPresent
      };
    });
  }

  render() {
    const { presents, newPresent } = this.state;
    return (
      <div className="App">
        <Header />
        <Form
          submitForm={this.submitForm}
          newPresent={newPresent}
          getQuery={this.getQuery}
          deletePresents={this.deletePresents}
        />
        <Wishlist presents={presents} />
      </div>
    );
  }
}

export default App;
