import React from "react";
class App extends React.Component {
  state = {
    percent: 0
  };
  updateProgress = (field, val) => {
    this.setState({ [field]: val });
  };

  render() {
    return (
      <div className="App">
        <div className="div">
          <ProgressBar width={400} percent={this.state.percent} />
          <button
            onClick={() =>
              this.updateProgress("percent", this.state.percent + 0.1)
            }
          >
            Add 10%
          </button>
        </div>
      </div>
    );
  }
}
