import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // To invoke the constructor of the parent class (Component)

    this.state = {
      users: [],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
