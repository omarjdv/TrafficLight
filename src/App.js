import React, { Component } from "react";
import TrafficsLights from "./components/TrafficsLights";
import "./App.css";

let Secuencia = [
  {
    color: "R",
    duration: "3seg"
  },
  {
    color: "Y",
    duration: "6seg"
  },
  {
    color: "G",
    duration: "8seg"
  }
];

class App extends Component {
  state = {
    active: "all"
  };

  setLights = index => {
    this.setState({
      active: Secuencia[index].color
    });
    let newIndex = index + 1;
    if (index === Secuencia.length - 1) {
      newIndex = 0;
    }
    const newDuration = parseInt(Secuencia[index].duration) * 1000;
    setTimeout(() => this.setLights(newIndex), newDuration);
  };

  componentDidMount() {
    setTimeout(() => this.setLights(0), 4000);
  }

  render() {
    const { active } = this.state;
    return (
      <div className="trafficslights">
        {" "}
        <h1>Traffics Lights</h1>
        <div className="App trafficslightscontainer ">
          <TrafficsLights
            active={active === "all" || active === "R"}
            color="R"
          />
          <TrafficsLights
            active={active === "all" || active === "Y"}
            color="Y"
          />
          <TrafficsLights
            active={active === "all" || active === "G"}
            color="G"
          />
        </div>
        <p>
          A component React that represent the functionality of one traffic
          light is displayed. Once it starts, all lights are displayed, after
          that, the funcionality is according to the sequence that we made.
        </p>
      </div>
    );
  }
}

export default App;
