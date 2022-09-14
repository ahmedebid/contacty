import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // To invoke the constructor of the parent class (Component)

    this.state = {
      userInfo: {
        name: "Ali",
        age: 22,
        education: "BSc",
      },
      company: "ZTM",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, I'm {this.state.userInfo.name}, I'm {this.state.userInfo.age}{" "}
            with {this.state.userInfo.education} in civil engineering and I work
            in {this.state.company}
          </p>
          <button
            onClick={() =>
              this.setState(
                () => {
                  return {
                    userInfo: {
                      name: "Kamel",
                      age: 12,
                      education: "Secondary School",
                    },
                  };
                },
                () => console.log(this.state)
              )
            }
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
