import React, { Component } from "react";
import "./App.css";
import { ImageSlider } from "./components/ImageSlider";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    visible: true,
  };

  render() {
    let slider = this.state.visible ? (
      <ImageSlider />
    ) : (
      <div>
        <Counter initialCount={1}></Counter>
      </div>
    );

    if (!this.state.visible) {
      slider = <div>Display nothing!!</div>;
    }

    const buttonText = this.state.visible ? "Hide" : "Show";

    return (
      <div className="App">
        {slider}
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;
